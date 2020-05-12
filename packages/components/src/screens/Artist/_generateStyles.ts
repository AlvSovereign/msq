import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme, gradientStart: number) => {
  const { DARKGREY_400, DARKGREY_700, LIGHTGREY_200, WHITE } = theme.color;
  const { LINEAR_XXS, LINEAR_SM, LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      paddingTop: gradientStart && gradientStart - 44,
      paddingBottom: LINEAR_SM,
    },
    inactiveTabFont: {
      color: `${WHITE}99`,
    },
    page: {
      height: '100%',
      width: '100%',
      flexDirection: 'column',
    },
    playButton: {
      flex: 1,
    },
    playButtonContainer: {
      flexDirection: 'row',
    },
    profileImage: {
      position: 'absolute',
      left: 0,
      right: 0,
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
