import { StyleSheet, Animated } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (tickerWidth: any, theme: ITheme) => {
  const { BLUE_500, LIGHTGREY_100, WHITE } = theme.color;
  const { LINEAR_SM } = theme.spacing;

  return StyleSheet.create({
    durationDisplay: { minWidth: 40 },
    point: {
      height: 12,
      width: 12,
      borderRadius: 9990,
      backgroundColor: BLUE_500,
      borderWidth: 3,
      borderColor: WHITE,
      position: 'absolute',
      right: -4,
      top: -4,
    },
    progressBar: {
      height: 4,
      flex: 1,
      backgroundColor: LIGHTGREY_100,
      borderRadius: 9999,
      marginHorizontal: LINEAR_SM,
    },
    progressContainer: {
      height: 6,
      paddingTop: 1,
      width: '100%',
    },
    ticker: {
      backgroundColor: BLUE_500,
      borderRadius: 9999,
      height: 4,
      width: tickerWidth,
    },
  });
};

export { _generateStyles };
