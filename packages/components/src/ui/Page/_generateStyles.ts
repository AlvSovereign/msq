import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';

const generateStyles = (breakpoints: TBreakpoint, theme: any) => {
  const { WHITE } = theme.color;

  return StyleSheet.create({
    backgroundImage: {},
    blur: {
      backgroundColor: WHITE,
      opacity: 0.7,
    },
    safeAreaView: { flex: 1 },
    scrollView: { flex: 1 },
    view: {
      flex: 1,
      paddingHorizontal: 16,
    },
  });
};

export { generateStyles };
