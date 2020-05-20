import { StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';

const _generateStyles = (theme: ITheme) => {
  const { LINEAR_XL } = theme.spacing;

  return StyleSheet.create({
    statContainer: {
      marginRight: LINEAR_XL,
    },
  });
};

export { _generateStyles };
