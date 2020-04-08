import React, { ReactNode, useContext } from 'react';
import { StyleSheet, TouchableHighlight } from 'react-native';
import { MsqThemeContext, useResponsive } from '../theme/ThemeContext';
import Typography from './Typography';

const styles = (theme: any) => {
  const baseStyles = {
    button: {
      ...theme.spacings.radius.sm,
      height: 40,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };

  return StyleSheet.create({
    primary: {
      ...baseStyles.button,
      backgroundColor: theme.colors.blue[500],
    },
  });
};

const Button = ({ text, variant }: IButton) => {
  const theme = useContext(MsqThemeContext);

  return (
    <TouchableHighlight style={styles(theme)[variant]}>
      {text && (
        <Typography color='white' variant='button'>
          {text}
        </Typography>
      )}
    </TouchableHighlight>
  );
};

export default Button;

interface IButton {
  text?: string;
  variant: Variant;
}

type Variant = 'primary';
