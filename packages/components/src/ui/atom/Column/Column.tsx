import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { generateStyles } from './_generateStyles';
import { useResponsive } from '../../../theme/hooks';
import theme from '../../../theme/theme';
import { TGutterBottom } from '../../utils/commonStyles';

const Column = ({
  children,
  horizontalPadding,
  lg,
  md,
  sm,
  gutterBottom,
  spacing, // From parent Row component
  style,
}: ColumnProps) => {
  const breakpoint = useResponsive();
  const columns: number =
    (breakpoint === 'sm' && sm) ||
    (breakpoint === 'md' && md) ||
    (breakpoint === 'lg' && lg) ||
    12;
  const styles = generateStyles(
    breakpoint,
    columns,
    horizontalPadding,
    spacing,
    theme
  );

  return (
    <View style={[styles.view, gutterBottom && styles[gutterBottom], style]}>
      {children}
    </View>
  );
};

export default Column;

interface ColumnProps {
  children: ReactNode;
  horizontalPadding?: THorizontalPadding;
  offsetSm?: SmColumns;
  offsetMd?: MdColumns;
  offsetLg?: LgColumns;
  sm: SmColumns;
  md: MdColumns;
  lg: LgColumns;
  gutterBottom?: TGutterBottom;
  spacing?: THorizontalPadding;
  style?: any;
}

export type THorizontalPadding = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | undefined;
type SmColumns = 1 | 2 | 3 | 4;
type MdColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type LgColumns = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
