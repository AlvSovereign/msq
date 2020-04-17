import React, { useContext, useRef } from 'react';
import { Animated, TouchableWithoutFeedback } from 'react-native';
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
  const animation = _generateAnimations(theme);
  const styles = _generateStyles(theme, icon, variant, animation.scaleValue);
  const { BLUE_500, LIGHTGREY_100, WHITE } = theme.color;

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
          {
            backgroundColor:
              variant === 'primary'
                ? animation.primaryButtonAnimBGColor
                : animation.secondaryButtonAnimBGColor,
            borderColor: isDisabled
              ? LIGHTGREY_100
              : variant === 'primary'
              ? animation.primaryButtonAnimBorderColor
              : BLUE_500,
          },
          !isDisabled && isHovered && styles[`${variant}Hover`],
          !isDisabled && isFocused && styles.focused,
          isDisabled && styles.isDisabled,
        ]}>
        {label && (
          <Typography
            color={isDisabled || variant === 'primary' ? 'white' : 'blue'}
            style={styles.typography}
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
