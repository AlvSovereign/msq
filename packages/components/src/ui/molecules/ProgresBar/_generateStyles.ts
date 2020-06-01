import { StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (tickerWidth: string, theme: ITheme) => {
  const { BLUE_500, LIGHTGREY_100, WHITE } = theme.color;

  return StyleSheet.create({
    point: {
      height: 6,
      width: 6,
      borderRadius: 9990,
      backgroundColor: BLUE_500,
      borderWidth: 2,
      borderColor: WHITE,
      position: 'absolute',
      right: 0,
    },
    progressBar: {
      height: 4,
      width: '100%',
      backgroundColor: LIGHTGREY_100,
      borderRadius: 9999,
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
