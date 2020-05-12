import { StyleSheet } from 'react-native';
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

const gutterBottomStyles = StyleSheet.create({
  xxs: { marginBottom: LINEAR_XXS },
  xs: { marginBottom: LINEAR_XS },
  sm: { marginBottom: LINEAR_SM },
  md: { marginBottom: LINEAR_MD },
  lg: { marginBottom: LINEAR_LG },
  xl: { marginBottom: LINEAR_XL },
  xxl: { marginBottom: LINEAR_XXL },
});

export { gutterBottomStyles };

export type TGutterBottom =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | 'xxl'
  | undefined;
