import React, { ReactNode, useContext } from 'react';
import { Text, StyleSheet } from 'react-native';
import { MsqThemeContext, useWindowSize } from './theme/ThemeContext';
import { TSize } from './theme/hooks';

const styles = (theme: any, windowSize: TSize) =>
  StyleSheet.create({
    hero: {
      ...theme[windowSize === 'sm' ? 0 : 1].headings.hero,
    },
  });

const Typography = ({ children, color, variant }: ITypography) => {
  const theme = useContext(MsqThemeContext);
  const windowSize = useWindowSize();

  return <Text style={styles(theme, windowSize)[variant]}>{children}</Text>;
};

export { Typography };

interface ITypography {
  children: ReactNode;
  color: Color;
  variant: Variant;
}

type Color = 'yellow' | 'blue';
type Variant = 'hero';
