import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../../theme/hooks/useResponsive';
import { ITheme } from '../../../theme/theme';
import { largeElevation } from '../../utils/commonStyles';

const _generateStyles = (breakpoint: TBreakpoint, theme: ITheme) => {
  const { WHITE } = theme.color;
  const { LINEAR_SM } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      justifyContent: 'space-between',
    },
    controlsContainer: {
      flex: 2,
    },
    coverImage: { height: '100%', width: 80 },
    icon: { flex: 1 },
    playerContainer: {
      backgroundColor: WHITE,
      bottom: 0,
      flex: 1,
      height: 80,
      position: 'absolute',
      width: '100%',
      zIndex: 1000,
      ...largeElevation,
    },
    playIcon: {
      marginHorizontal: LINEAR_SM,
    },
    secondaryControlsContainer: {
      flex: 1,
    },
    secondaryControlIcon: {
      marginRight: LINEAR_SM,
    },
    trackDetails: {
      flex: 1,
    },
  });
};

export { _generateStyles };
