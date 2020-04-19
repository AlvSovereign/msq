import React, { useContext, useRef, useEffect } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography/Typography';
import { renderIcon, IconKey } from '../../assets/icons/renderIcon';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from './_generateAnimations';

const Button = ({
  icon,
  isDisabled = false,
  onPress,
  label,
  variant,
}: IButton) => {
  const ref = useRef(null);
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);
  const theme = useContext(MsqThemeContext);
  const animation = _generateAnimations(variant);
  const styles = _generateStyles(theme, icon, variant);
  const { BLUE_500, WHITE } = theme.color;

  let fillColor;
  if (isDisabled) {
    fillColor = WHITE;
  } else {
    variant === 'primary' ? (fillColor = WHITE) : (fillColor = BLUE_500);
  }

  return (
    <TouchableWithoutFeedback
      ref={ref}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={animation.handlePressIn}
      onPressOut={animation.handlePressOut}>
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale: animation.scaleValue }] },
          variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
          !isDisabled && isHovered && styles.buttonHovered,
          isDisabled && styles.buttonDisabled,
        ]}>
        <Animated.View
          style={[
            StyleSheet.absoluteFill,
            styles.buttonForeground,
            {
              opacity: animation.opacityValue || 0,
            },
          ]}
        />
        {label && (
          <Typography
            style={[
              styles.typography,
              !isDisabled && isFocused && styles.typographyFocused,
              isDisabled && styles.typographyDisabed,
            ]}
            variant='button'>
            {label}
          </Typography>
        )}
        {icon &&
          renderIcon({
            fill: fillColor,
            icon,
            styles,
          })}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

interface IButton {
  icon?: IconKey;
  isDisabled?: boolean;
  onPress: () => void;
  label?: string;
  variant: Variant;
}

export type Variant = 'primary' | 'secondary';
