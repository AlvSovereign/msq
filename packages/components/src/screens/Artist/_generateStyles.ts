import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme, gradientStart: number) => {
  const { BACKGROUND, BLACK, BLUE_500, WHITE } = theme.color;
  const { LINEAR_XXS, LINEAR_SM, LINEAR_MD, LINEAR_LG } = theme.spacing;

  return StyleSheet.create({
    contentContainer: {
      // flex: 1,
      // marginHorizontal: theme.spacing.LINEAR_MD,
      paddingTop:
        gradientStart && gradientStart - (Platform.OS === 'ios' ? 70 : 28),
      paddingHorizontal: theme.spacing.LINEAR_MD,
      paddingBottom: 8,
      // height: '100%',
    },
    inactiveTabFont: {
      color: `${WHITE}99`,
    },
    page: {
      // flex: 1,
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
    tab: {
      flex: 1,
    },
    tabBar: {
      alignItems: 'center',
      backgroundColor: `${BLACK}55`,
      justifyContent: 'center',
      flexDirection: 'row',
      height: 50,
    },
    tabBarItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      height: 50,
    },
    tabIndicator: {
      borderBottomColor: BLUE_500,
      borderBottomWidth: LINEAR_XXS,
    },
    tabView: {
      backgroundColor: BACKGROUND,
      paddingTop: LINEAR_LG,
      paddingHorizontal: LINEAR_MD,
    },
    tag: {
      color: theme.color.LIGHTGREY_200,
    },
  });
};

export { _generateStyles };
