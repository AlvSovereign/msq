import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme, gradientStart: number) => {
  return StyleSheet.create({
    contentContainer: {
      // flex: 1,
      // marginHorizontal: theme.spacing.LINEAR_MD,
      paddingTop:
        gradientStart && gradientStart - (Platform.OS === 'ios' ? 70 : 28),
      paddingHorizontal: theme.spacing.LINEAR_MD,
      // height: '100%',
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
    tag: {
      color: theme.color.LIGHTGREY_200,
    },
  });
};

export { _generateStyles };
