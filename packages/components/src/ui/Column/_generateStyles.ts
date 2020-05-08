import { StyleSheet } from 'react-native';
import { TBreakpoint } from '../../theme/hooks/useResponsive';
import { ITheme } from '../../theme/theme';

const generateStyles = (
  breakpoint: TBreakpoint,
  columns: number,
  theme: ITheme
) => {
  const maxColumns: any = {
    sm: 4,
    md: 8,
    lg: 12,
  };

  const calcutaleWidth = (breakpoint: TBreakpoint, columns: number) => {
    return (100 / maxColumns[breakpoint]) * columns;
  };

  return StyleSheet.create({
    view: {
      paddingHorizontal: theme.spacing.LINEAR_XXS,
      width: `${calcutaleWidth(breakpoint, columns)}%`,
    },
  });
};

export { generateStyles };
