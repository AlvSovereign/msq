import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../../theme/hooks/useResponsive';

const _generateStyles = (breakpoint: TBreakpoint) => {
  return StyleSheet.create({
    image: {
      height: '100%',
      width: '100%',
      borderRadius: 9999,
    },
    profileImageContainer: {
      height: breakpoint === 'sm' ? 112 : 168,
      width: breakpoint === 'sm' ? 112 : 168,
    },
  });
};

export { _generateStyles };
