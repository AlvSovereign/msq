import React, { useContext, useRef, useEffect } from 'react';
import { Animated, TouchableHighlight } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography/Typography';
import { renderIcon, IconKey } from '../../assets/icons/renderIcon';
import { _generateStyles } from './_generateStyles';
import { _generateAnimations } from './_generateAnimations';
import { TGutterBottom } from '../utils/commonStyles';

const Button = ({
  gutterBottom,
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
  const styles = _generateStyles(gutterBottom, theme, icon, variant);
  const { BLUE_500, WHITE } = theme.color;

  let fillColor;
  if (isDisabled) {
    fillColor = WHITE;
  } else {
    variant === 'primary' ? (fillColor = WHITE) : (fillColor = BLUE_500);
  }

  return (
    <TouchableHighlight
      ref={ref}
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={onPress}
      // onPressIn={animation.handlePressIn}
      // onPressOut={animation.handlePressOut} // will add when I figure how to add scle and bg color change with native animations
      style={[
        {
          borderRadius: 4,
          height: 40,
        },
        gutterBottom && styles.gutterBottom,
      ]}>
      <Animated.View
        style={[
          styles.button,
          { transform: [{ scale: animation.scaleValue }] },
          variant === 'primary' ? styles.primaryButton : styles.secondaryButton,
          gutterBottom && styles.gutterBottom,
          !isDisabled && isHovered && styles.buttonHovered,
          isDisabled && styles.buttonDisabled,
        ]}>
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
    </TouchableHighlight>
  );
};

export default Button;

interface IButton {
  gutterBottom?: TGutterBottom;
  icon?: IconKey;
  isDisabled?: boolean;
  label?: string;
  onPress: () => void;
  variant: Variant;
}

export type Variant = 'primary' | 'secondary';
