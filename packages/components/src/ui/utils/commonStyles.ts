import { StyleSheet, Platform } from 'react-native';
import theme from '../../theme/theme';

const {
  LINEAR_XXS,
  LINEAR_XS,
  LINEAR_SM,
  LINEAR_MD,
  LINEAR_LG,
  LINEAR_XL,
  LINEAR_XXL,
} = theme.spacing;

const { DARKGREY_700 } = theme.color;

const gutterBottomStyles = StyleSheet.flatten({
  xxs: { marginBottom: LINEAR_XXS },
  xs: { marginBottom: LINEAR_XS },
  sm: { marginBottom: LINEAR_SM },
  md: { marginBottom: LINEAR_MD },
  lg: { marginBottom: LINEAR_LG },
  xl: { marginBottom: LINEAR_XL },
  xxl: { marginBottom: LINEAR_XXL },
});

const shadowStyles = (
  color,
  opacity,
  radius,
  offsetWidth,
  offsetHeight,
  elevation
) => {
  return Platform.select({
    ios: {
      shadowColor: color,
      shadowOpacity: opacity,
      shadowRadius: radius,
      shadowOffset: {
        width: offsetWidth,
        height: offsetHeight,
      },
    },
    android: {
      elevation,
    },
    web: {
      boxShadow: `${offsetWidth}px ${offsetHeight}px ${radius}px`,
    },
  });
};

const basicElevation = shadowStyles(DARKGREY_700, 1, 24, 0, 8, 4);
const largeElevation = shadowStyles(DARKGREY_700, 1, 48, 0, 24, 16);

export { basicElevation, largeElevation, gutterBottomStyles };

export type TGutterBottom =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | undefined;
