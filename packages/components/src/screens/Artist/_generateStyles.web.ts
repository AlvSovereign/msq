import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { DARKGREY_400, DARKGREY_700, LIGHTGREY_200, WHITE } = theme.color;
  const { LINEAR_XXS, LINEAR_SM, LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      height: 600,
      justifyContent: 'flex-end',
    },
    heroContainer: {
      backgroundColor: DARKGREY_700,
      height: 600,
    },
    inactiveTabFont: {
      color: `${WHITE}99`,
    },
    page: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
    },
    playButtonContainer: {
      flexDirection: 'row',
    },
    profileImage: {
      flexDirection: 'column',
      position: 'absolute',
      right: 0,
      height: 600,
      width: 600,
    },
    shareButton: { marginRight: LINEAR_XXS },
    popularTracksSection: {
      backgroundColor: DARKGREY_700,
      paddingTop: LINEAR_LG,
    },
    tag: {
      color: LIGHTGREY_200,
    },
    trackCard: {
      backgroundColor: DARKGREY_400,
    },
  });
};

export { _generateStyles };
