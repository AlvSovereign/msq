import React, { ReactNode, useContext } from 'react';
import { Text, StyleSheet, StyleProp, TextStyle } from 'react-native';
import { MsqThemeContext, useResponsive } from '../theme/ThemeContext';

const Typography = ({ children, color, style, variant }: ITypography) => {
  const theme = useContext(MsqThemeContext);
  const windowSize = useResponsive();
  const styles = StyleSheet.create({
    body2: {
      ...theme.typography.text.body2
    },
    hero: {
      ...theme.typography.headings[windowSize === 'sm' ? 1 : 0].hero
    },
    h1: {
      ...theme.typography.headings[windowSize === 'sm' ? 1 : 0].h1
    },
    h2: {
      ...theme.typography.headings[windowSize === 'sm' ? 1 : 0].h2
    },
    button: {
      ...theme.typography.text.button
    },
    label: { ...theme.typography.input.label },
    black: { color: theme.colors.black },
    blue: { color: theme.colors.blue[500] },
    error: { color: theme.colors.error },
    lightGrey: { color: theme.colors.lightGrey[500] },
    white: { color: theme.colors.white }
  });

  return (
    <Text style={[styles[variant], styles[color], style]}>{children}</Text>
  );
};

export default Typography;

interface ITypography {
  children: ReactNode;
  color: 'black' | 'blue' | 'error' | 'lightGrey' | 'white';
  style?: StyleProp<TextStyle>;
  variant: 'body2' | 'button' | 'hero' | 'h1' | 'h2' | 'label';
}
