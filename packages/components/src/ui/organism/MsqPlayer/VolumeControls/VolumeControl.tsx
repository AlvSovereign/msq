import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  LayoutChangeEvent,
  GestureResponderEvent,
} from 'react-native';
import { getStyles } from './getStyles';
import { MsqThemeContext } from '../../../../theme/ThemeContext';

const VolumeControl = ({ volume, volumeTo }: VolumeControlProps) => {
  console.log('volume: ', volume);
  const theme = useContext(MsqThemeContext);
  const [seekBarWidth, setSeekBarWidth] = useState<number>(0);

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setSeekBarWidth(width);
  };

  const handleOnPress = (event: GestureResponderEvent) => {
    volumeTo(event.nativeEvent.locationX / seekBarWidth);
  };

  const animation = useRef(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: volume,
      duration: 100,
    }).start();
  }, [volume]);

  const tickerWidth = animation.current.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const { container, point, ticker, volumeBar } = getStyles(theme, tickerWidth);

  return (
    <View style={container}>
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View onLayout={handleOnLayout} style={volumeBar}>
          <Animated.View style={ticker}>
            <View style={point} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export { VolumeControl };

interface VolumeControlProps {
  volume: number;
  volumeTo: (percentage: number) => void;
}
