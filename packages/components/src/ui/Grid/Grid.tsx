import React, { ReactNode, useContext } from 'react';
import { View } from 'react-native';
import { MsqThemeContext, useResponsive } from '../../theme/ThemeContext';
import { generateStyles } from './Grid.styles';

const Grid = ({ children, orientation }: GridProps) => {
  const theme = useContext(MsqThemeContext);
  const breakpoints = useResponsive();
  const styles = generateStyles(breakpoints, theme);

  return <View style={styles.view}>{children}</View>;
};

export { Grid };

interface GridProps {
  children: ReactNode;
  offsetSm?: SmBreakpoints;
  offsetMd?: MdBreakpoints;
  offsetLg?: LgBreakpoints;
  orientation: 'row' | 'column';
  sm?: SmBreakpoints;
  md?: MdBreakpoints;
  lg?: LgBreakpoints;
}

type SmBreakpoints = 1 | 2 | 3 | 4;
type MdBreakpoints = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type LgBreakpoints = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
