import { StyleSheet } from 'react-native';
import { Alignment, Orientation } from './Row';
import { gutterBottomStyles } from '../utils/commonStyles';
import { THorizontalPadding } from '../Column/Column';
import { ITheme } from '../../theme/theme';

const generateStyles = (
  align: Alignment,
  horizontalPadding: THorizontalPadding,
  orientation: Orientation,
  spacing: THorizontalPadding,
  theme: ITheme
) => {
  const { LINEAR_XXS, LINEAR_XS, LINEAR_SM, LINEAR_MD } = theme.spacing;
  const paddings = {
    xxs: LINEAR_XXS,
    xs: LINEAR_XS,
    sm: LINEAR_SM,
    md: LINEAR_MD,
  };

  return StyleSheet.create({
    gridContainer: {
      alignItems: align && align,
      flexDirection: orientation,
      paddingHorizontal: horizontalPadding && paddings[horizontalPadding],
    },
    view: {
      // flex: 1,
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
