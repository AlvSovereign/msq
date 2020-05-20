import React, { ReactNode, useContext } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { MsqThemeContext, useResponsive } from '../../../theme/ThemeContext';
import { _generateStyles } from './_generateStyles';
import { TGutterBottom } from '../../utils/commonStyles';

const Typography = ({
  children,
  color,
  display,
  gutterBottom,
  style,
  textAlign,
  variant,
}: ITypography) => {
  const theme = useContext(MsqThemeContext);
  const windowSize = useResponsive();
  const styles = _generateStyles(theme, windowSize);

  return (
    <Text
      style={[
        styles[variant],
        color && styles[color],
        display && styles[display],
        gutterBottom && styles[gutterBottom],
        textAlign && styles[textAlign],
        style,
      ]}>
      {children}
    </Text>
  );
};

export default Typography;

interface ITypography {
  children: ReactNode;
  color?: 'black' | 'blue' | 'error' | 'lightGrey' | 'white';
  display?: 'block' | 'inline';
  gutterBottom?: TGutterBottom;
  style?: StyleProp<TextStyle>;
  textAlign?: 'left' | 'center' | 'right';
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'hero'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'label'
    | 'small'
    | 'stats'
    | 'title';
}
