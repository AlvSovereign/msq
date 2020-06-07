import React, { ReactNode, useContext } from 'react';
import { View, Animated, FlexAlignType } from 'react-native';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import { generateStyles } from './_generateStyles';
import { TGutterBottom } from '../../utils/commonStyles';
import { THorizontalPadding } from '../Column/Column';

const Row = ({
  align,
  animated = false,
  children,
  gutterBottom,
  horizontalPadding,
  justify,
  orientation = 'column',
  spacing,
  style,
  wrap,
}: RowProps) => {
  const theme = useContext(MsqThemeContext);
  const styles = generateStyles(
    align,
    horizontalPadding,
    justify,
    orientation,
    spacing,
    theme
  );

  const clonedElement = () => {
    return React.Children.map(
      children,
      (c: any, i: number) =>
        c &&
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
            styles.container,
            gutterBottom && styles[gutterBottom],
            wrap && styles.wrap,
            style,
          ]}>
          {clonedElement()}
        </Animated.View>
      ) : (
        <View
          style={[
            styles.container,
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

interface RowProps {
  align?: FlexAlignType | undefined;
  animated?: boolean;
  children: ReactNode;
  gutterBottom?: TGutterBottom;
  horizontalPadding?: THorizontalPadding;
  justify?: Justify;
  orientation?: Orientation;
  spacing?: THorizontalPadding;
  style?: any;
  wrap?: boolean;
}

export type Orientation = 'row' | 'column';
export type Justify =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | undefined;
