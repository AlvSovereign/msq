import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';

const generateStyles = (breakpoints: TBreakpoint, theme: any) => {
  return StyleSheet.create({
    backgroundImage: {},
    safeAreaView: { flex: 1 },
    view: {
      flex: 1,
      paddingHorizontal: 16,
    },
  });
};

export { generateStyles };
