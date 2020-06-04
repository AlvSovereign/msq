import React, { useEffect, useState } from 'react';
import { Howl, Howler } from 'howler';
import { Track } from '../../graphql/generated/graphql';
import useInterval from '../useInterval';

// A React Hook extending `useSound` hook to include playlist functionality with custom audio player.
// Conceptually there are 2 driver for this player: the Playlist and the Player (Howler.js). This Hook
// hook will return what is playing (i.e. currentTrack from Playlist) and controls/state of the player.
const useMsqPlayer = (
  playlist: Track[],
  { volume = 1, onload, ...delegated }: HookOptions = {}
) => {
  const HowlConstructor = React.useRef<HowlStatic | null>(null);

  // Set up playlist
  const [soundPlaylist, setSoundPlaylist] = useState<TrackWithSound[]>([]);
  const [playlistIndex, setPlaylistIndex] = useState<number>(0);

  // let currentTrack = soundPlaylist[playlistIndex];
  // console.log('currentTrack: ', currentTrack);
  // When a playlist `Track[]` is added, map it and add the Howler Sound to each child.
  React.useEffect(() => {
    HowlConstructor.current = Howl;

    const soundPlaylist: TrackWithSound[] = playlist.map((track: Track) => {
      return {
        ...track,
        sound: new HowlConstructor.current!({
          src: [track.url],
          volume,
          ...delegated,
        }),
      };
    });

    // then set it to state
    setSoundPlaylist(soundPlaylist);

    // set playlist index to the start of the playlist
    setPlaylistIndex(0);
  }, [playlist]);

  // Play the sound
  const [isPlaying, setIsPlaying] = useState(false);

  const play: PlayFunction = React.useCallback(
    (options?: PlayOptions) => {
      if (typeof options === 'undefined') {
        options = {};
      }

      if (!soundPlaylist[playlistIndex]) {
        return;
      }

      soundPlaylist[playlistIndex].sound.play();

      soundPlaylist[playlistIndex].sound.once('end', () => setIsPlaying(false));

      setIsPlaying(true);
    },
    [soundPlaylist[playlistIndex]]
  );

  // Pause the sound
  const pause = React.useCallback(
    (id) => {
      if (!soundPlaylist[playlistIndex]) {
        return;
      }
      soundPlaylist[playlistIndex].sound.pause(id);
      setIsPlaying(false);
    },
    [soundPlaylist[playlistIndex]]
  );

  // Skip to prev/next track
  const skip = (direction: SkipDirection) => {
    // if next track doesn't exist then return
    if (direction === 'next' && playlistIndex + 1 === playlist.length) {
      return;
    }

    // first stop the current sound
    soundPlaylist[playlistIndex].sound.stop();

    if (direction === 'prev') {
      if (seekTime < 3) {
        // if seek is less that 3 secs, then skip to previous track, IF there
        // is one
        if (playlistIndex - 1 !== -1) {
          setPlaylistIndex((playlistIndex) => playlistIndex - 1);
        } else {
          // ELSE restart the track
          soundPlaylist[playlistIndex].sound.seek(0);
          play();
        }
      } else {
        // ELSE restart the track
        soundPlaylist[playlistIndex].sound.seek(0);
        play();
      }
    } else {
      // skip to next track
      setPlaylistIndex((playlistIndex) => playlistIndex + 1);
    }
  };

  // we need to make sure that the sound is played AFTER playlistIndex has changed.
  // The easiest way to guarentee this is to set up this useEffect
  useEffect(() => {
    play();
  }, [playlistIndex]);

  // Display Seek Position
  const [seekTime, setSeekTime] = useState<any>(0);
  const seekCallback = () => {
    const currentTrack = soundPlaylist[playlistIndex];
    const currentSeek = currentTrack.sound.seek();
    setSeekTime(currentSeek);
  };
  const delay = 1000;
  useInterval(seekCallback, delay);

  //Seek though the sound
  const seekTo = (percentage: number) => {
    // use horizontal position as percentage to seek to that point in the track
    soundPlaylist[playlistIndex].sound.seek(
      soundPlaylist[playlistIndex].duration * percentage
    );
  };

  // Whenever volume is changed, change those properties
  // on the sound instance.
  React.useEffect(() => {
    if (soundPlaylist[playlistIndex]) {
      soundPlaylist[playlistIndex].sound.volume(volume);
    }
    // A weird bug means that including the `sound` here can trigger an
    // error on unmount, where the state loses track of the sprites??
    // No idea, but anyway I don't need to re-run this if only the `sound`
    // changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [soundPlaylist[playlistIndex]]);

  const stop = React.useCallback(
    (id) => {
      if (!soundPlaylist[playlistIndex]) {
        return;
      }
      soundPlaylist[playlistIndex].sound.stop(id);
      setIsPlaying(false);
    },
    [soundPlaylist[playlistIndex]]
  );

  const returnedValue: ReturnedValue = [
    soundPlaylist[playlistIndex], // currentTrack
    {
      isPlaying,
      pause,
      play,
      seekTime,
      seekTo,
      skip,
      stop,
    }, // playlist controls which are methods wrapping Howler.js
  ];

  return returnedValue;
};

export default useMsqPlayer;

interface TrackWithSound extends Track {
  sound: Howl;
}

export interface HookOptions {
  volume?: number;
  interrupt?: boolean;
  soundEnabled?: boolean;
  sprite?: SpriteMap;
  onload?: () => void;
}

export type SpriteMap = {
  [key: string]: [number, number];
};

export interface PlayOptions {
  id?: string;
  forceSoundEnabled?: boolean;
}

export type PlayFunction = (options?: PlayOptions) => void;

export interface ExposedData {
  isPlaying: boolean;
  pause: (id?: string) => void;
  play: PlayFunction;
  seekTime: number;
  seekTo: (percentage: number) => void;
  stop: (id?: string) => void;
  skip: (direction: SkipDirection) => void;
}

export type SkipDirection = 'next' | 'prev';

export type ReturnedValue = [TrackWithSound, ExposedData];
