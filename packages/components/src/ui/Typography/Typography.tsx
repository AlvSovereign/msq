import React, { ReactNode, useContext } from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import { MsqThemeContext, useResponsive } from '../../theme/ThemeContext';
import { _generateStyles } from './_generateStyles';

const Typography = ({ children, color, style, variant }: ITypography) => {
  const theme = useContext(MsqThemeContext);
  const windowSize = useResponsive();
  const styles = _generateStyles(theme, windowSize);

  return (
    <Text style={[styles[variant], color && styles[color], style]}>
      {children}
    </Text>
  );
};

export default Typography;

interface ITypography {
  children: ReactNode;
  color?: 'black' | 'blue' | 'error' | 'lightGrey' | 'white';
  style?: StyleProp<TextStyle>;
  variant: 'body2' | 'button' | 'hero' | 'h1' | 'h2' | 'label';
}
