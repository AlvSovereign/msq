import React, { ReactNode, useContext } from 'react';
import { View } from 'react-native';
import { MsqThemeContext } from '../../theme/ThemeContext';
import { generateStyles } from './_generateStyles';
import { TGutterBottom } from '../utils/commonStyles';

const Row = ({
  children,
  gutterBottom,
  orientation = 'column',
  style,
}: GridProps) => {
  // const theme = useContext(MsqThemeContext);
  const styles = generateStyles(gutterBottom, orientation);

  return <View style={[styles.gridContainer, style]}>{children}</View>;
};

export default Row;

interface GridProps {
  children: ReactNode;
  gutterBottom?: TGutterBottom | undefined;
  orientation?: Orientation;
  style?: any;
}

export type Orientation = 'row' | 'column';
