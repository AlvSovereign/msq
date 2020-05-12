import { StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { LINEAR_XS, LINEAR_SM, LINEAR_LG, LINEAR_XL } = theme.spacing;
  return StyleSheet.create({
    cardContainer: {
      // paddingRight: LINEAR_SM,
    },
    container: {
      paddingTop: LINEAR_XL,
    },
    releaseCover: {
      marginBottom: LINEAR_XS,
      width: '100%',
    },
    releaseDetails: {
      alignItems: 'center',
    },
  });
};

export { _generateStyles };
