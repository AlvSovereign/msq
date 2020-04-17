import { Animated } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateAnimations = (theme: ITheme) => {
  const { BLUE_500, BLUE_700, LIGHTGREY_100, WHITE } = theme.color;

  const scaleValue = new Animated.Value(1);
  const buttonBgColorValue = new Animated.Value(0);
  const buttonBorderColorValue = new Animated.Value(0);

  const primaryButtonAnimBGColor = buttonBgColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BLUE_500, BLUE_700],
  });
  const secondaryButtonAnimBGColor = buttonBgColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [WHITE, LIGHTGREY_100],
  });
  const primaryButtonAnimBorderColor = buttonBorderColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BLUE_500, BLUE_700],
  });

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.98,
      duration: 0,
    }).start();

    Animated.timing(buttonBgColorValue, {
      toValue: 1,
      duration: 0.5,
    }).start();

    Animated.timing(buttonBorderColorValue, {
      toValue: 1,
      duration: 0.5,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 0,
    }).start();

    Animated.timing(buttonBgColorValue, {
      toValue: 0,
      duration: 1,
    }).start();

    Animated.timing(buttonBorderColorValue, {
      toValue: 0,
      duration: 1,
    }).start();
  };

  return {
    handlePressIn,
    handlePressOut,
    primaryButtonAnimBGColor,
    primaryButtonAnimBorderColor,
    secondaryButtonAnimBGColor,
    scaleValue,
  };
};

export { _generateAnimations };
