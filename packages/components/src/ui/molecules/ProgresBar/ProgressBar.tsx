import React, { useContext } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { _generateStyles } from './_generateStyles';
import { MsqThemeContext } from '../../../theme/ThemeContext';

const ProgressBar = ({ duration, seek }: ProgressBarProps) => {
  const tickerWidth: string = `${(seek / duration!) * 100 || 0}%`;
  console.log('tickerWidth: ', tickerWidth);
  const theme = useContext(MsqThemeContext);
  const { point, progressBar, progressContainer, ticker } = _generateStyles(
    tickerWidth,
    theme
  );

  return (
    <View style={progressContainer}>
      <View style={progressBar}>
        <Animated.View style={[StyleSheet.absoluteFill, ticker]}>
          <View style={point} />
        </Animated.View>
      </View>
    </View>
  );
};

export default ProgressBar;

interface ProgressBarProps {
  duration: number | null;
  seek: number;
}
