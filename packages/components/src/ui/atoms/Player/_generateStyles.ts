import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../../theme/hooks/useResponsive';
import { ITheme } from '../../../theme/theme';
import { largeElevation } from '../../utils/commonStyles';

const _generateStyles = (breakpoint: TBreakpoint, theme: ITheme) => {
  const { WHITE } = theme.color;

  return StyleSheet.create({
    coverImage: { height: '100%', width: 64 },
    playerContainer: {
      backgroundColor: WHITE,
      bottom: 0,
      flex: 1,
      height: 64,
      position: 'absolute',
      width: '100%',
      zIndex: 1000,
      ...largeElevation,
    },
  });
};

export { _generateStyles };
