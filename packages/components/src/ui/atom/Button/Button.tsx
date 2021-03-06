import React, { useContext, useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atom/Typography/Typography';
import { _renderIcon, IconKey } from '../../../assets/icons/_renderIcon';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from './_generateAnimations';
import { TGutterBottom } from '../../utils/commonStyles';

const Button = ({
  gutterBottom,
  isDisabled = false,
  label,
  leftIcon,
  onPress,
  rightIcon,
  style,
  variant,
}: IButton) => {
  const ref = useRef(null);
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);
  const theme = useContext(MsqThemeContext);
  const animation = _generateAnimations();
  const styles = _generateStyles(theme, variant, leftIcon, rightIcon);
  const { BLUE_500, LIGHTGREY_500, WHITE } = theme.color;

  const fillColor = {
    primary: WHITE,
    secondary: BLUE_500,
    transparent: LIGHTGREY_500,
    isDisabled: LIGHTGREY_500,
    facebook: WHITE,
    google: '',
  };

  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={animation.handlePressIn}
      onPressOut={animation.handlePressOut}
      style={[styles.buttonBase, gutterBottom && styles[gutterBottom], style]}>
      <Animated.View
        style={[
          styles.buttonBase,
          styles.button,
          { transform: [{ scale: animation.scaleValue }] },
          variant === 'primary' && styles.primaryButton,
          variant === 'secondary' && styles.secondaryButton,
          variant === 'transparent' && styles.transparentButton,
          variant === 'facebook' && styles.facebookButton,
          variant === 'google' && styles.googleButton,
          !isDisabled && isHovered && styles.buttonHovered,
          !isDisabled &&
            isHovered &&
            variant === 'primary' &&
            styles.primaryHovered,
          !isDisabled &&
            isHovered &&
            variant === 'secondary' &&
            styles.secondaryHovered,
          !isDisabled &&
            isHovered &&
            variant === 'facebook' &&
            styles.facebookHovered,
          !isDisabled &&
            isHovered &&
            variant === 'google' &&
            styles.googleHovered,
          !isDisabled && isFocused && styles.buttonFocused,
          isDisabled && styles.buttonDisabled,
          style,
        ]}>
        {leftIcon &&
          _renderIcon({
            fill: isDisabled ? fillColor.isDisabled : fillColor[variant],
            icon: leftIcon,
          })}
        {label && (
          <Typography
            style={[
              styles.typographyBase,
              variant === 'primary' && styles.primaryTypography,
              variant === 'secondary' && styles.secondaryTypography,
              variant === 'facebook' && styles.facebookTypography,
              isDisabled && styles.typographyDisabed,
            ]}
            variant='button'>
            {label}
          </Typography>
        )}
        {rightIcon &&
          _renderIcon({
            fill: isDisabled ? fillColor.isDisabled : fillColor[variant],
            icon: rightIcon,
          })}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;

export interface IButton {
  gutterBottom?: TGutterBottom;
  isDisabled?: boolean;
  label?: string;
  leftIcon?: IconKey;
  onPress: () => void;
  rightIcon?: IconKey;
  style?: any;
  variant: Variant;
}

export type Variant =
  | 'facebook'
  | 'google'
  | 'primary'
  | 'secondary'
  | 'transparent';
