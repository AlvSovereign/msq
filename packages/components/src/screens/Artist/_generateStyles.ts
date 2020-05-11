import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme, gradientStart: number) => {
  const {
    BACKGROUND,
    BLACK,
    BLUE_500,
    DARKGREY_400,
    DARKGREY_700,
    WHITE,
  } = theme.color;
  const {
    LINEAR_XXS,
    LINEAR_XS,
    LINEAR_SM,
    LINEAR_MD,
    LINEAR_LG,
    RADIUS_SM,
  } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      paddingTop: gradientStart && gradientStart - 28,
      paddingHorizontal: theme.spacing.LINEAR_MD,
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
    safeAreaView: { flex: 1, height: '100%' },
    shareButton: { marginRight: theme.spacing.LINEAR_XXS },
    popularTracksSection: {
      backgroundColor: DARKGREY_700,
      paddingTop: LINEAR_LG,
    },
    tag: {
      color: theme.color.LIGHTGREY_200,
    },
    trackCard: {
      backgroundColor: DARKGREY_400,
    },
  });
};

export { _generateStyles };
