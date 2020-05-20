import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { DARKGREY_400, DARKGREY_700, LIGHTGREY_200, WHITE } = theme.color;
  const { LINEAR_XXS, LINEAR_SM, LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      flex: 1,
      height: '100%',
      justifyContent: 'flex-end',
    },
    controlsContainer: {
      alignItems: 'center',
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
      // flexDirection: 'z',
      position: 'absolute',
      top: 0,
      left: 0,
      height: 600,
      width: '100%',
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
