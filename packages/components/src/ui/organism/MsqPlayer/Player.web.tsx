import React, { useContext, useRef, useEffect } from 'react';
import ReactAudioPlayer, { ReactAudioPlayerProps } from 'react-audio-player';
import { PlayerState } from '../../molecules/AppFrame/AppFrame';

const Player = ({ currentState, src }: PlayerProps) => {
  console.log('currentState: ', currentState);
  const ref = useRef<HTMLAudioElement | null>(null);

  const controls: PlayerControls = {
    IS_PLAYING: async () => {
      console.log(111);
      await ref.current!.play();
    },
    IS_PAUSED: () => ref.current!.pause(),
  };

  useEffect(() => {
    controls[currentState];
  }, [currentState]);

  return <audio ref={ref} src={src} />;
};

export default Player;

interface PlayerProps extends ReactAudioPlayerProps {
  currentState: PlayerState;
  ref: React.MutableRefObject<null>;
}

interface PlayerControls {
  [key: PlayerState]: Promise<any> | any;
}
