import React, { useContext, useRef, useEffect } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography/Typography';
import { _renderIcon, IconKey } from '../../assets/icons/_renderIcon';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from './_generateAnimations';
import { TGutterBottom } from '../utils/commonStyles';

const Button = ({
  gutterBottom,
  isDisabled = false,
  label,
  leftIcon,
  onPress,
  rightIcon,
  variant,
}: IButton) => {
  const ref = useRef(null);
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);
  const theme = useContext(MsqThemeContext);
  const animation = _generateAnimations(variant);
  const styles = _generateStyles(
    gutterBottom,
    theme,
    variant,
    leftIcon,
    rightIcon
  );
  const { BLUE_500, WHITE } = theme.color;

  let fillColor;
  if (isDisabled) {
    fillColor = WHITE;
  } else {
    variant === 'primary' ? (fillColor = WHITE) : (fillColor = BLUE_500);
  }

  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={animation.handlePressIn}
      onPressOut={animation.handlePressOut}
      style={[styles.buttonBase, gutterBottom && styles.gutterBottom]}>
      <Animated.View
        style={[
          styles.buttonBase,
          styles.button,
          { transform: [{ scale: animation.scaleValue }] },
          variant === 'primary' && styles.primaryButton,
          variant === 'secondary' && styles.secondaryButton,
          variant === 'facebook' && styles.facebookButton,
          variant === 'google' && styles.googleButton,
          gutterBottom && styles.gutterBottom,
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
            variant === 'facebook' &&
            styles.googleHovered,
          !isDisabled && isFocused && styles.buttonFocused,
          isDisabled && styles.buttonDisabled,
        ]}>
        {leftIcon && _renderIcon(WHITE, leftIcon, styles)}
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
        {rightIcon && _renderIcon(fillColor, rightIcon, styles)}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default Button;

interface IButton {
  gutterBottom?: TGutterBottom;
  isDisabled?: boolean;
  label?: string;
  leftIcon?: IconKey;
  onPress: () => void;
  rightIcon?: IconKey;
  variant: Variant;
}

export type Variant = 'facebook' | 'google' | 'primary' | 'secondary';
