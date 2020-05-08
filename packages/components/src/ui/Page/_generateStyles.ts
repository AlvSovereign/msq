import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';
import { ITheme } from '../../theme/theme';

const generateStyles = (breakpoints: TBreakpoint, theme: ITheme) => {
  const { LIGHT_BLUE, WHITE } = theme.color;

  return StyleSheet.create({
    blur: {
      backgroundColor: WHITE,
      opacity: 0.7,
    },
    safeAreaView: { flex: 1 },
    scrollView: { flex: 1, flexDirection: 'column' },
    view: {
      backgroundColor: LIGHT_BLUE,
      flex: 1,
      paddingHorizontal: 16,
    },
  });
};

export { generateStyles };
