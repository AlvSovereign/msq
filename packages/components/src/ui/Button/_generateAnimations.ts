import { Animated } from 'react-native';
import { Variant } from './Button';

const _generateAnimations = (variant: Variant) => {
  const opacityValue = new Animated.Value(0);
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.98,
      duration: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityValue, {
      toValue: variant === 'primary' ? 0.3 : 0.1,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 0,
      useNativeDriver: true,
    }).start();

    Animated.timing(opacityValue, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  return {
    handlePressIn,
    handlePressOut,
    opacityValue,
    scaleValue,
  };
};

export { _generateAnimations };
