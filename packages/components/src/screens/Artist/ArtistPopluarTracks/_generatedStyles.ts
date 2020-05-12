import { StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { DARKGREY_400, DARKGREY_700 } = theme.color;
  const { LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    popularTracksSection: {
      backgroundColor: DARKGREY_700,
      paddingTop: LINEAR_LG,
    },
    trackCard: {
      backgroundColor: DARKGREY_400,
    },
  });
};

export { _generateStyles };
