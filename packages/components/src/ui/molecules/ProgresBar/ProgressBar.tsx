import React, {
  useContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  View,
  Animated,
  TouchableWithoutFeedback,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import { _generateStyles } from './_generateStyles';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atom/Typography/Typography';
import Row from '../../atom/Row/Row';
import { secsToDuration } from '../../../utils';

const ProgressBar = ({ duration, seek, seekTo }: ProgressBarProps) => {
  const progress: number = (seek / duration!) * 100 || 0;
  const animation = useRef(new Animated.Value(0));
  useEffect(() => {
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  }, [progress]);

  const tickerWidth = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
    extrapolate: 'clamp',
  });

  const theme = useContext(MsqThemeContext);
  const {
    durationDisplay,
    point,
    progressBar,
    progressContainer,
    ticker,
  } = _generateStyles(tickerWidth, theme);

  const endTime = useCallback(secsToDuration(duration || 0), [duration]);
  const currentTime = useCallback(secsToDuration(seek || 0), [seek]);

  const [seekBarWidth, setSeekBarWidth] = useState<number>(0);
  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setSeekBarWidth(width);
  };
  const handleOnPress = (event: GestureResponderEvent) => {
    seekTo(event.nativeEvent.locationX / seekBarWidth);
  };

  return (
    <Row orientation='row' align='center' style={progressContainer}>
      {currentTime && (
        <Typography
          textAlign='right'
          variant='body2'
          color='lightGrey'
          style={durationDisplay}>
          {currentTime}
        </Typography>
      )}
      <TouchableWithoutFeedback onPress={handleOnPress}>
        <View onLayout={handleOnLayout} style={progressBar}>
          <Animated.View style={ticker}>
            <View style={point} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
      {endTime && (
        <Typography variant='body2' color='lightGrey' style={durationDisplay}>
          {endTime}
        </Typography>
      )}
    </Row>
  );
};

export default ProgressBar;

interface ProgressBarProps {
  duration: number | null;
  seek: number;
  seekTo: (time: number) => void;
}
