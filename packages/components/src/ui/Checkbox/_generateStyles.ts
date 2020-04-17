import { Platform, StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { LINEAR_XS } = theme.spacing;

  return StyleSheet.create({
    checkbox: {
      marginLeft: 0,
      marginRight: LINEAR_XS,
      marginVertical: 0,
    },
    checkboxContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'column',
      flex: 1,
      marginVertical: LINEAR_XS,
    },
    label: {
      flex: 1,
    },
    subLabel: {
      marginLeft: Platform.OS === 'web' ? 24 : 32,
    },
  });
};

export { _generateStyles };
