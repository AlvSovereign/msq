import { Animated } from 'react-native';
import { Variant } from './Button';

const _generateAnimations = (variant: Variant) => {
  const scaleValue = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.98,
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
  };

  return {
    handlePressIn,
    handlePressOut,
    scaleValue,
  };
};

export { _generateAnimations };
