import { StyleSheet, Platform } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { DARKGREY_400 } = theme.color;
  const { LINEAR_XS, LINEAR_SM, RADIUS_SM } = theme.spacing;

  return StyleSheet.create({
    trackCard: {
      borderRadius: RADIUS_SM,
      height: 64,
      justifyContent: 'space-between',
      paddingHorizontal: LINEAR_SM,
    },
    trackContent: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    trackNumber: {
      width: 24,
    },
    trackImage: {
      borderRadius: RADIUS_SM,
      height: 40,
      marginRight: LINEAR_XS,
      width: 40,
    },
  });
};

export { _generateStyles };
