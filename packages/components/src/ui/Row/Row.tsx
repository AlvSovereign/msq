import React, { ReactNode, useContext } from 'react';
import { View, Animated } from 'react-native';
import { MsqThemeContext } from '../../theme/ThemeContext';
import { generateStyles } from './_generateStyles';
import { TGutterBottom } from '../utils/commonStyles';
import { THorizontalPadding } from '../Column/Column';

const Row = ({
  align,
  animated = false,
  children,
  gutterBottom,
  horizontalPadding,
  orientation = 'column',
  spacing,
  style,
  wrap,
}: GridProps) => {
  const theme = useContext(MsqThemeContext);
  const styles = generateStyles(
    align,
    horizontalPadding,
    orientation,
    spacing,
    theme
  );

  const clonedElement = () => {
    return React.Children.map(children, (c: any, i: number) =>
      React.cloneElement(c, {
        key: i,
        spacing: spacing,
        ...c.props,
      })
    );
  };

  return (
    <>
      {animated ? (
        <Animated.View
          style={[
            styles.gridContainer,
            gutterBottom && styles[gutterBottom],
            wrap && styles.wrap,
            style,
          ]}>
          {clonedElement()}
        </Animated.View>
      ) : (
        <View
          style={[
            styles.gridContainer,
            gutterBottom && styles[gutterBottom],
            wrap && styles.wrap,
            style,
          ]}>
          {clonedElement()}
        </View>
      )}
    </>
  );
};

export default Row;

interface GridProps {
  align?: Alignment;
  animated?: boolean;
  children: ReactNode;
  gutterBottom?: TGutterBottom;
  horizontalPadding?: THorizontalPadding;
  orientation?: Orientation;
  spacing?: THorizontalPadding;
  style?: any;
  wrap?: boolean;
}

export type Alignment = 'center' | 'flex-start' | 'flex-end' | undefined;
export type Orientation = 'row' | 'column';
