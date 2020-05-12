import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';
import { ITheme } from '../../theme/theme';
import { THorizontalPadding } from './Column';
import { gutterBottomStyles } from '../utils/commonStyles';

const generateStyles = (
  breakpoint: TBreakpoint,
  columns: number,
  spacing: THorizontalPadding,
  theme: ITheme
) => {
  const { LINEAR_XXS, LINEAR_XS, LINEAR_SM, LINEAR_MD } = theme.spacing;
  const maxColumns: any = {
    sm: 4,
    md: 8,
    lg: 12,
  };

  const calcutaleWidth = (breakpoint: TBreakpoint, columns: number) => {
    return (100 / maxColumns[breakpoint]) * columns;
  };

  const paddings = {
    xxs: LINEAR_XXS,
    xs: LINEAR_XS,
    sm: LINEAR_SM,
    md: LINEAR_MD,
  };

  return StyleSheet.create({
    ...gutterBottomStyles,
    view: {
      padding: spacing && paddings[spacing],
      width: `${calcutaleWidth(breakpoint, columns)}%`,
    },
  });
};

export { generateStyles };
