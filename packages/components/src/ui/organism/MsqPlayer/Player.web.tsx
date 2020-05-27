import React, { useContext, useRef, useEffect } from 'react';
import ReactAudioPlayer, { ReactAudioPlayerProps } from 'react-audio-player';
import { PlayerState } from '../../molecules/AppFrame/AppFrame';

const Player = ({ currentState, src }: PlayerProps) => {
  const ref = useRef<HTMLAudioElement | null>(null);

  const audioControls: PlayerControls = {
    IS_PLAYING: async () => await ref.current!.play(),
    IS_PAUSED: () => ref.current!.pause(),
    IS_SKIPPED_PREV: () => null,
    IS_SKIPPED_NEXT: () => null,
  };

  useEffect(() => {
    if (audioControls[currentState]) {
      let control;
      control = audioControls[currentState];

      control();
    }
  }, [currentState]);

  return <audio ref={ref} preload='auto' src={src} />;
};

export default Player;

interface PlayerProps extends ReactAudioPlayerProps {
  currentState: PlayerState;
}

interface PlayerControls {
  [key: string]: Promise<any> | any;
}
