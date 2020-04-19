import theme from '../../theme/theme';

const getGutterBottomWidth = (gutterBottomSize: TGutterBottom) => {
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    LINEAR_XL,
    LINEAR_XXL,
  } = theme.spacing;

  switch (gutterBottomSize) {
    case 'xxs':
      return LINEAR_XXS;
    case 'xs':
      return LINEAR_XS;
    case 'sm':
      return LINEAR_SM;
    case 'md':
      return LINEAR_MD;
    case 'lg':
      return LINEAR_LG;
    case 'xl':
      return LINEAR_XL;
    case 'xxl':
      return LINEAR_XXL;
    default:
      return 0;
  }
};

export { getGutterBottomWidth };

export type TGutterBottom = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
