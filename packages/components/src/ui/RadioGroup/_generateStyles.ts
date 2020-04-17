import { ITheme } from '../../theme/theme';
import { StyleSheet } from 'react-native';

const _generateStyles = (theme: ITheme) => {
  const { LINEAR_XS, LINEAR_XXS } = theme.spacing;

  return StyleSheet.create({
    optionLabel: {},
    optionSubLabel: {
      marginLeft: 32,
    },
    radioGroupContainer: {
      flex: 1,
    },
    radioContainer: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      marginVertical: LINEAR_XXS,
    },
    radio: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%',
    },
    icon: {
      marginRight: LINEAR_XS,
    },
  });
};

export { _generateStyles };
