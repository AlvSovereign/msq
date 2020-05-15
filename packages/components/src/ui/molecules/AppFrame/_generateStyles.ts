import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../../theme/hooks/useResponsive';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (breakpoint: TBreakpoint, theme: ITheme) => {
  const { LINEAR_XL } = theme.spacing;
  return StyleSheet.create({
    appFrameContainer: { flex: 1, flexDirection: 'row' },
    sideDrawerContainer: {
      width: breakpoint === 'md' ? 240 : 264,
      paddingLeft: LINEAR_XL,
      paddingTop: LINEAR_XL,
      paddingBOTTOM: 64,
    },
  });
};

export { _generateStyles };
