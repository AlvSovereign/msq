import React, { useContext } from 'react';
import { StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';
import { MsqThemeContext, useResponsive } from '../../theme/ThemeContext';
import Typography from '../Typography';
import { renderIcon } from './_renderIcons';

const Button = ({
  icon,
  isDisabled = false,
  onPress,
  label,
  variant,
}: IButton) => {
  const theme = useContext(MsqThemeContext);
  const scaleValue = new Animated.Value(1);
  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 0,
    }).start();
  };
  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 0,
    }).start();
  };

  const baseStyles = {
    button: {
      ...theme.spacings.radius.sm,
      alignItems: 'center',
      alignSelf: 'center',
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      minWidth: 40,
      padding: 4,
      transform: [{ scale: scaleValue }],
      width: 'auto',
    },
  };

  const styles = StyleSheet.create({
    isDisabled: {
      backgroundColor: theme.colors.lightGrey[100],
    },
    primary: {
      ...baseStyles.button,
      backgroundColor: theme.colors.blue[500],
    },
    secondary: {
      ...baseStyles.button,
      backgroundColor: theme.colors.white,
      borderColor: theme.colors.blue[500],
      borderWidth: 2,
    },
    typography: {
      flex: 1,
      marginRight: icon && theme.spacings.linear.xxs,
      textAlign: 'center',
    },
  });

  return (
    <TouchableWithoutFeedback
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View style={[styles[variant], isDisabled && styles.isDisabled]}>
        {label && (
          <Typography
            color={variant === 'primary' ? 'white' : 'blue'}
            style={styles.typography}
            variant='button'>
            {label}
          </Typography>
        )}
        {icon && renderIcon(icon, styles, theme, variant)}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

interface IButton {
  icon?: Icon;
  isDisabled?: boolean;
  onPress: () => void;
  label?: string;
  variant: Variant;
}

export type Icon = 'chevronRight';
export type Variant = 'primary' | 'secondary';
