import { StyleSheet } from 'react-native';
import { Alignment, Orientation, Justify } from './Row';
import { gutterBottomStyles } from '../../utils/commonStyles';
import { THorizontalPadding } from '../Column/Column';
import { ITheme } from '../../../theme/theme';

const generateStyles = (
  align: Alignment,
  horizontalPadding: THorizontalPadding,
  justify: Justify,
  orientation: Orientation,
  spacing: THorizontalPadding,
  theme: ITheme
) => {
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
  } = theme.spacing;
  const paddings = {
    xxs: LINEAR_XXS,
    xs: LINEAR_XS,
    sm: LINEAR_SM,
    md: LINEAR_MD,
    lg: LINEAR_LG,
  };

  return StyleSheet.create({
    container: {
      alignItems: align && align,
      flexDirection: orientation,
      justifyContent: justify && justify,
      paddingHorizontal: horizontalPadding && paddings[horizontalPadding],
      width: '100%' + (spacing && 2 * paddings[spacing]),
      margin: spacing && -paddings[spacing],
    },
    wrap: {
      flexWrap: 'wrap',
    },
    ...gutterBottomStyles,
  });
};

export { generateStyles };
