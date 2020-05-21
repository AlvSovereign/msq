import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../../theme/hooks/useResponsive';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (breakpoint: TBreakpoint, theme: ITheme) => {
  const { LINEAR_XL } = theme.spacing;

  return StyleSheet.create({
    appFrameContainer: { flex: 1, flexDirection: 'row' },
    sideDrawerContainer: {
      width: breakpoint === 'md' ? 160 : 200,
      paddingLeft: LINEAR_XL,
      paddingTop: LINEAR_XL,
      paddingBottom: 104,
    },
  });
};

export { _generateStyles };
