import React, { useEffect } from 'react';
import { Howl, Howler } from 'howler';
import { Track } from '../../graphql/generated/graphql';

// A React Hook extending `useSound` hook to include playlist functionality with custom audio player
const useMsqPlayer = (
  playlist: Track[],
  {
    volume = 1,
    soundEnabled = true,
    interrupt = false,
    onload,
    ...delegated
  }: HookOptions = {}
) => {
  const HowlConstructor = React.useRef<HowlStatic | null>(null);

  const [soundPlaylist, setSoundPlaylist] = React.useState<Howl[]>([])
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [nowPlaying, setNowPlaying] = React.useState<Track| {}>({});
  const [playlistIndex, setPlaylistIndex] = React.useState<number>(0)
  const [duration, setDuration] = React.useState<number | null>(null);
  const [sound, setSound] = React.useState<Howl | null>(null);

  const handleLoad = function() {
    if (typeof onload === 'function') {
      // @ts-ignore
      onload.call(this);
    }

    // @ts-ignore
    setDuration(this.duration() * 1000);
  };

  // When the URL changes, we have to do a whole thing where we recreate
  // the Howl instance. This is because Howler doesn't expose a way to
  // tweak the sound
  React.useEffect(() => {
    // MSQ: I was having timing issues for seting up the 'sound' variable. My 'url' prop
    // was defined DURING the import and setup of HowlerConstructor. Opted to import
    // the normal way 'not importing `howler` ' and just having the `new HowlerConstructor`
    // new up whenever url changes
      HowlConstructor.current = Howl;


    const soundPlaylist = playlist.map((element) => (
      new HowlConstructor.current({
        src: [element.url],
        volume,
        onload: handleLoad,
        ...delegated,
      })
    ));

    setSoundPlaylist(soundPlaylist)
    setPlaylistIndex(0)
    setNowPlaying(playlist[playlistIndex])
  }, [playlist]);


  // Whenever volume is changed, change those properties
  // on the sound instance.
  React.useEffect(() => {
    if (sound) {
      sound.volume(volume);
    }
    // A weird bug means that including the `sound` here can trigger an
    // error on unmount, where the state loses track of the sprites??
    // No idea, but anyway I don't need to re-run this if only the `sound`
    // changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [volume]);

  const skip = (direction: SkipDirection) => {
    if ((direction === 'prev' && playlistIndex - 1 === playlist.length) || (direction === 'next' &&playlistIndex + 1 === playlist.length )) {
      return;
    }
    soundPlaylist[playlistIndex]?.stop();

    if (direction === 'prev') {
      setPlaylistIndex(playlistIndex => playlistIndex - 1)
    } else {
      setPlaylistIndex(playlistIndex => playlistIndex + 1)
    }
  }

  React.useEffect(() => {
    setNowPlaying(playlist[playlistIndex])
    play()
  }, [playlistIndex])

  const play: PlayFunction = React.useCallback(
    (options?: PlayOptions) => {
      if (typeof options === 'undefined') {
        options = {};
      }

      if (!soundPlaylist[playlistIndex] || (!soundEnabled && !options.forceSoundEnabled)) {
        return;
      }

      if (interrupt) {
        soundPlaylist[playlistIndex].stop();
      }

      soundPlaylist[playlistIndex].play(options.id);

      soundPlaylist[playlistIndex].once('end', () => setIsPlaying(false));

      setIsPlaying(true);
    },
    [soundPlaylist[playlistIndex], soundEnabled, interrupt]
  );

  const stop = React.useCallback(
    (id) => {
      if (!sound) {
        return;
      }
      sound.stop(id);
      setIsPlaying(false);
      setNowPlaying({})
    },
    [sound]
  );

  const pause = React.useCallback(
    (id) => {
      if (!soundPlaylist[playlistIndex]) {
        return;
      }
      soundPlaylist[playlistIndex].pause(id);
      setIsPlaying(false);
    },
    [soundPlaylist[playlistIndex]]
  );

  const prev = () => {

  }

  const returnedValue: ReturnedValue = [
    play,
    {
      sound,
      stop,
      pause,
      isPlaying,
      skip,
      nowPlaying,
      duration,
    },
  ];

  return returnedValue;
};

export default useMsqPlayer;

interface useMsqPlayerProps {}

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
  sound: Howl | null;
  stop: (id?: string) => void;
  skip: (direction: SkipDirection) => void;
  pause: (id?: string) => void;
  isPlaying: boolean;
  nowPlaying: Track | {};
  duration: number | null;
}

export type SkipDirection = 'next' | 'prev'

export type ReturnedValue = [PlayFunction, ExposedData];
