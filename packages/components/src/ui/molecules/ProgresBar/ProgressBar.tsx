import React, { useContext, useCallback, useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { _generateStyles } from './_generateStyles';
import { MsqThemeContext } from '../../../theme/ThemeContext';
import Typography from '../../atom/Typography/Typography';
import Row from '../../atom/Row/Row';

const ProgressBar = ({ duration, seek }: ProgressBarProps) => {
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
  const { point, progressBar, progressContainer, ticker } = _generateStyles(
    tickerWidth,
    theme
  );
  const secsToDuration: any = (seconds: number) => {
    const valueDisplay = (value: number) => (value < 10 ? `0${value}` : value);
    var hoursDisplay = valueDisplay(Math.floor(seconds / 3600));
    var minsDisplay = valueDisplay(Math.floor((seconds % 3600) / 60));
    var secsDisplay = valueDisplay(Math.floor((seconds % 3600) % 60));
    const returnedValue =
      hoursDisplay === '00'
        ? `${minsDisplay}:${secsDisplay}`
        : `${hoursDisplay}:${minsDisplay}:${secsDisplay}`;

    return seconds ? returnedValue : '00:00';
  };

  const endTime = useCallback(secsToDuration(duration || 0), [duration]);
  const currentTime = useCallback(secsToDuration(seek || 0), [seek]);

  return (
    <Row orientation='row' align='center' style={progressContainer}>
      {currentTime && (
        <Typography variant='body2' color='lightGrey'>
          {currentTime}
        </Typography>
      )}
      <View style={progressBar}>
        <Animated.View style={ticker}>
          <View style={point} />
        </Animated.View>
      </View>
      {endTime && (
        <Typography variant='body2' color='lightGrey'>
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
}
