import { StyleSheet } from 'react-native';
import { ITheme } from '../../../../theme/theme';

const getStyles = (theme: ITheme, tickerWidth: any) => {
  const { BLUE_500, LIGHTGREY_100, WHITE } = theme.color;
  const { LINEAR_SM } = theme.spacing;
  return StyleSheet.create({
    container: {
      backgroundColor: WHITE,
      height: 30,
      left: -40,
      position: 'absolute',
      top: -50,
      width: 120,
    },
    point: {
      backgroundColor: BLUE_500,
      borderColor: WHITE,
      borderRadius: 9990,
      borderWidth: 3,
      bottom: -3,
      height: 12,
      position: 'absolute',
      right: 0,
      width: 12,
    },
    ticker: {
      backgroundColor: BLUE_500,
      borderRadius: 9999,
      height: 6,
      width: tickerWidth,
    },
    volumeBar: {
      backgroundColor: LIGHTGREY_100,
      borderRadius: 9999,
      flex: 1,
      height: 6,
      margin: LINEAR_SM,
      width: 100,
    },
  });
};

export { getStyles };
