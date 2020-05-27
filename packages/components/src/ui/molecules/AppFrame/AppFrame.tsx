import React, {
  ReactNode,
  useContext,
  useReducer,
  useEffect,
  Dispatch,
} from 'react';
import { View } from 'react-native';
import { useResponsive } from '../../../theme/hooks';
import { _generateStyles } from './_generateStyles';
import { MsqThemeContext } from 'components/src/theme/ThemeContext';
import { MsqPlayer, SideDrawer } from '../../';
import { Track } from '../../../graphql/generated/graphql';

export enum PlayerState {
  IS_PLAYING = 'IS_PLAYING',
  IS_PAUSED = 'IS_PAUSED',
  IS_SKIPPED_NEXT = 'IS_SKIPPED_NEXT',
  IS_SKIPPED_PREV = 'IS_SKIPPED_PREV',
  IS_STOPPED = 'IS_STOPPED',
}

interface Action {
  payload?: any;
  type: PlayerActionTypes;
}

export interface PlayerInternalState {
  nowPlaying: Track;
  playlist: Track[];
  playerReady: boolean;
  playerState: PlayerState;
}

export interface MsqPlayerState {
  dispatch: Dispatch<Action>;
  internalState: PlayerInternalState;
}

export enum PlayerActionTypes {
  NEXT = 'NEXT',
  PAUSE = 'PAUSE',
  PLAY = 'PLAY',
  PREV = 'PREV',
  RESET = 'RESET',
  SET_NOW_PLAYING = 'SET_NOW_PLAYING',
  SET_PLAYLIST = 'SET_PLAYLIST',
}

const initialState: MsqPlayerState = {
  dispatch: () => null,
  internalState: {
    nowPlaying: {
      _id: '',
      id: '',
      createdAt: '',
      filename: '',
      title: '',
      length: 0,
      url: '',
    },
    playlist: [],
    playerReady: false,
    playerState: PlayerState.IS_STOPPED,
  },
};

const reducer = (state: MsqPlayerState, action: Action) => {
  const { internalState } = state;
  const { payload = null, type } = action;

  const actionTypes = {
    NEXT: {
      ...state,
      internalState: {
        ...internalState,
        playerState: PlayerState.IS_SKIPPED_NEXT,
      },
    },
    PAUSE: {
      ...state,
      internalState: { ...internalState, playerState: PlayerState.IS_PAUSED },
    },
    PLAY: {
      ...state,
      internalState: {
        ...internalState,
        playerState: PlayerState.IS_PLAYING,
      },
    },
    PREV: {
      ...state,
      internalState: {
        ...internalState,
        playerState: PlayerState.IS_SKIPPED_PREV,
      },
    },
    RESET: { ...initialState },
    SET_NOW_PLAYING: {
      ...state,
      internalState: {
        ...internalState,
        nowPlaying: payload,
        // playerState: PlayerState.IS_STOPPED,
      },
    },
    SET_PLAYLIST: {
      ...state,
      internalState: {
        ...internalState,
        playlist: payload,
      },
    },
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('type: ', type);
    console.log('prev state', state.internalState);
  }

  return actionTypes[type];
};

export const MsqPlayerContext = React.createContext<MsqPlayerState>(
  initialState
);

const AppFrame = ({ children }: AppFrameProps) => {
  const [{ internalState }, dispatch] = useReducer(reducer, initialState);

  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);
  const styles = _generateStyles(breakpoint, theme);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('new state', internalState);
    }
  }, [internalState]);

  return (
    <MsqPlayerContext.Provider value={{ internalState, dispatch }}>
      <View style={styles.appFrameContainer}>
        {breakpoint !== 'sm' && <SideDrawer styles={styles} />}
        {children}
      </View>
      <MsqPlayer />
    </MsqPlayerContext.Provider>
  );
};

export default AppFrame;

interface AppFrameProps {
  children: ReactNode;
}
