import React, { ReactNode, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { MsqThemeContext, useResponsive } from '../theme/ThemeContext';

const Typography = ({ children, color, variant }: ITypography) => {
  const theme = useContext(MsqThemeContext);
  const windowSize = useResponsive();
  const styles = StyleSheet.create({
    hero: {
      ...theme.typography.headings[windowSize === 'sm' ? 0 : 1].hero,
    },
    h1: {
      ...theme.typography.headings[windowSize === 'sm' ? 0 : 1].h1,
    },
    h2: {
      ...theme.typography.headings[windowSize === 'sm' ? 0 : 1].h2,
    },
    button: {
      ...theme.typography.text.button,
    },
    white: { color: theme.colors.white },
    black: { color: theme.colors.black },
  });

  return <Text style={[styles[variant], styles[color]]}>{children}</Text>;
};

export default Typography;

interface ITypography {
  children: ReactNode;
  color: Color;
  variant: Variant;
}

type Color = 'black' | 'white';
type Variant = 'hero' | 'h1' | 'h2' | 'button';
