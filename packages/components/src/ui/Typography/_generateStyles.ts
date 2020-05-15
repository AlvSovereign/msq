import { StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';
import { TBreakpoint } from '../../theme/hooks/useResponsive';

const _generateStyles = (theme: ITheme, windowSize: TBreakpoint) => {
  const { BLACK, BLUE_500, ERROR, LIGHTGREY_500, WHITE } = theme.color;
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    LINEAR_XL,
    LINEAR_XXL,
  } = theme.spacing;
  const {
    BODY1,
    BODY2,
    BUTTON,
    LABEL,
    HERO,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    SMALL,
    TITLE,
  } = theme.typography;

  const displayStyles = {
    block: {
      width: '100%',
    },
    inline: {
      width: 'auto',
    },
  };

  const gutterBottomStyles = {
    xxs: { marginBottom: LINEAR_XXS },
    xs: { marginBottom: LINEAR_XS },
    sm: { marginBottom: LINEAR_SM },
    md: { marginBottom: LINEAR_MD },
    lg: { marginBottom: LINEAR_LG },
    xl: { marginBottom: LINEAR_XL },
    xxl: { marginBottom: LINEAR_XXL },
  };

  const textAlignStyles = {
    left: {
      textAlign: 'left' as 'left',
    },
    center: {
      textAlign: 'center' as 'center',
    },
    right: {
      textAlign: 'right' as 'right',
    },
  };

  const variantStyles = {
    body1: {
      ...BODY1,
    },
    body2: {
      ...BODY2,
    },
    button: {
      ...BUTTON,
    },
    hero: {
      ...HERO[windowSize === 'sm' ? 1 : 0],
    },
    h1: {
      ...H1[windowSize === 'sm' ? 1 : 0],
    },
    h2: {
      ...H2[windowSize === 'sm' ? 1 : 0],
    },
    h3: {
      ...H3[windowSize === 'sm' ? 1 : 0],
    },
    h4: {
      ...H4[windowSize === 'sm' ? 1 : 0],
    },
    h5: {
      ...H5[windowSize === 'sm' ? 1 : 0],
    },
    h6: {
      ...H6[windowSize === 'sm' ? 1 : 0],
    },
    label: { ...LABEL },
    small: {
      ...SMALL,
    },
    title: {
      ...TITLE,
    },
  };

  return StyleSheet.create({
    ...displayStyles,
    ...gutterBottomStyles,
    ...textAlignStyles,
    ...variantStyles,
    black: { color: BLACK },
    blue: { color: BLUE_500 },
    error: { color: ERROR },
    lightGrey: { color: LIGHTGREY_500 },
    white: { color: WHITE },
  });
};

export { _generateStyles };
