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

export enum PlayerState {
  IS_PLAYING = 'IS_PLAYING',
  IS_PAUSED = 'IS_PAUSED',
  IS_STOPPED = 'IS_STOPPED',
}

interface Action {
  payload?: any;
  type: PlayerActionTypes;
}

export interface PlayerInternalState {
  nowPlaying: string;
  playerReady: boolean;
  playerState: PlayerState;
}

export interface MsqPlayerState {
  dispatch: Dispatch<Action>;
  internalState: PlayerInternalState;
}

export enum PlayerActionTypes {
  PAUSE = 'PAUSE',
  PLAY = 'PLAY',
  RESET = 'RESET',
}

const initialState: MsqPlayerState = {
  dispatch: () => null,
  internalState: {
    nowPlaying: '',
    playerReady: false,
    playerState: PlayerState.IS_STOPPED,
  },
};

const reducer = (state: MsqPlayerState, action: Action) => {
  const { internalState } = state;
  const actionTypes = {
    PAUSE: {
      ...state,
      internalState: { ...internalState, playerState: PlayerState.IS_PAUSED },
    },
    PLAY: {
      ...state,
      internalState: { ...internalState, playerState: PlayerState.IS_PLAYING },
    },
    RESET: { ...initialState },
  };

  if (process.env.NODE_ENV === 'development') {
    console.log('type: ', action.type);
    console.table(internalState);
  }

  return actionTypes[action.type];
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
      console.table(internalState);
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
