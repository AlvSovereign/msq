import { StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { DARKGREY_400 } = theme.color;
  const { LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    trackCard: {
      backgroundColor: DARKGREY_400,
    },
  });
};

export { _generateStyles };
