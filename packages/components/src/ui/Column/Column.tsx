import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { generateStyles } from './_generateStyles';
import { useResponsive } from '../../theme/hooks';
import theme from '../../theme/theme';

const Column = ({ children, lg, md, sm, style }: ColumnProps) => {
  const breakpoint = useResponsive();
  const columns: number =
    (breakpoint === 'sm' && sm) ||
    (breakpoint === 'md' && md) ||
    (breakpoint === 'lg' && lg) ||
    12;
  const styles = generateStyles(breakpoint, columns, theme);

  return <View style={[styles.view, style]}>{children}</View>;
};

export default Column;

interface ColumnProps {
  children: ReactNode;
  offsetSm?: SmColumns;
  offsetMd?: MdColumns;
  offsetLg?: LgColumns;
  sm: SmColumns;
  md: MdColumns;
  lg: LgColumns;
  style?: any;
}

type SmColumns = 1 | 2 | 3 | 4;
type MdColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type LgColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
