import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';
import { ITheme } from '../../theme/theme';
import { THorizontalPadding } from './Column';

const generateStyles = (
  breakpoint: TBreakpoint,
  horizontalPadding: THorizontalPadding,
  columns: number,
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
    view: {
      paddingHorizontal: horizontalPadding && paddings[horizontalPadding],
      width: `${calcutaleWidth(breakpoint, columns)}%`,
    },
  });
};

export { generateStyles };
