const radius = {
  RADIUS_SM: 4,
  RADIUS_MD: 6,
  RADIUS_LG: 8,
};

const linear = {
  LINEAR_XXS: 4,
  LINEAR_XS: 8,
  LINEAR_SM: 12,
  LINEAR_MD: 16,
  LINEAR_LG: 20,
  LINEAR_XL: 24,
  LINEAR_XXL: 40,
};

const spacing = {
  ...radius,
  ...linear,
};

export { spacing };

export type TSpacing = { [key in TSpacingTypes]: number };

type TSpacingTypes =
  | 'RADIUS_SM'
  | 'RADIUS_MD'
  | 'RADIUS_LG'
  | 'LINEAR_XXS'
  | 'LINEAR_XS'
  | 'LINEAR_SM'
  | 'LINEAR_MD'
  | 'LINEAR_LG'
  | 'LINEAR_XL'
  | 'LINEAR_XXL';
