import React, { useReducer, ReactNode } from 'react';

export enum PlayerState {
  IS_PLAYING,
  IS_PAUSED,
  IS_STOPPED,
}

interface MsqPlayerState {
  nowPlaying: string;
  playerReady: boolean;
  playerState: PlayerState;
}

enum ActionTypes {
  PAUSE = 'PAUSE',
  PLAY = 'PLAY',
  RESET = 'RESET',
}

interface Action {
  payload: any;
  type: ActionTypes;
}

const initialState: MsqPlayerState = {
  nowPlaying: '',
  playerReady: false,
  playerState: PlayerState.IS_STOPPED,
};

const init = (initialState: MsqPlayerState) => initialState;

const reducer = (state: MsqPlayerState, action: Action) => {
  const actionTypes = {
    PAUSE: { ...state, playerState: PlayerState.IS_PAUSED },
    PLAY: { ...state, playerState: PlayerState.IS_PLAYING },
    RESET: init(initialState),
  };

  return actionTypes[action.type];
};

const MsqPlayerContext = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const Context = React.createContext(state);

  return Context;
};

export default MsqPlayerContext;
