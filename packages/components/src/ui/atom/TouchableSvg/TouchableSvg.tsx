import React, { ReactNode, useContext, useRef } from 'react';
import { TouchableOpacity, Animated } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import { _generateAnimations } from '../Button/_generateAnimations';
import { IButton } from '../Button/Button';
import { _renderIcon } from '../../../assets/icons';
import { IconKey } from '../../../assets/icons/_renderIcon';

const TouchableSvg = ({
  fill,
  icon,
  interactionFill,
  isDisabled,
  onPress,
  onPressIn,
  onPressOut,
  style,
}: TouchableSvgProps) => {
  const ref = useRef(null);
  const theme = useContext(MsqThemeContext);
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);
  const animation = _generateAnimations();
  const { LIGHTGREY_200 } = theme.color;

  const handlePressIn = () => {
    animation.handlePressIn;
    onPressIn && onPressIn();
  };

  const handlePressOut = () => {
    animation.handlePressOut;
    onPressOut && onPressOut();
  };

  return (
    <TouchableOpacity
      ref={ref}
      activeOpacity={0.7}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[{ transform: [{ scale: animation.scaleValue }] }, style]}>
        {_renderIcon({
          fill: isDisabled ? LIGHTGREY_200 : isHovered ? interactionFill : fill,
          icon: icon,
        })}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default TouchableSvg;

interface TouchableSvgProps {
  fill: string;
  icon: IconKey;
  interactionFill: string;
  isDisabled?: boolean;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  style?: any;
}
