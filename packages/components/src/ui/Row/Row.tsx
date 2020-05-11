import React, { ReactNode, useContext } from 'react';
import { View, Animated } from 'react-native';
import { MsqThemeContext } from '../../theme/ThemeContext';
import { generateStyles } from './_generateStyles';
import { TGutterBottom } from '../utils/commonStyles';

const Row = ({
  animated = false,
  children,
  gutterBottom,
  orientation = 'column',
  style,
}: GridProps) => {
  // const theme = useContext(MsqThemeContext);
  const styles = generateStyles(orientation);

  return (
    <>
      {animated ? (
        <Animated.View
          style={[
            styles.gridContainer,
            gutterBottom && gutterBottom && styles[gutterBottom],
            style,
          ]}>
          {children}
        </Animated.View>
      ) : (
        <View
          style={[
            styles.gridContainer,
            gutterBottom && gutterBottom && styles[gutterBottom],
            style,
          ]}>
          {children}
        </View>
      )}
    </>
  );
};

export default Row;

interface GridProps {
  animated?: boolean;
  children: ReactNode;
  gutterBottom?: TGutterBottom | undefined;
  orientation?: Orientation;
  style?: any;
}

export type Orientation = 'row' | 'column';
