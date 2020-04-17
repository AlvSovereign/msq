import { StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';
import { TInputTypes } from './Input';

const _generateStyles = (
  theme: ITheme,
  isError: boolean | undefined,
  numberOfLines: number | undefined,
  type: TInputTypes
) => {
  const { ERROR, LIGHTGREY_200, RED_50, WHITE } = theme.color;
  const { LINEAR_LG, LINEAR_XS, LINEAR_XXS, RADIUS_MD } = theme.spacing;
  const { TEXT } = theme.typography;

  return StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: LINEAR_LG,
      width: '100%',
    },
    errorText: {
      alignSelf: 'flex-end',
    },
    focused: { borderColor: LIGHTGREY_200 },
    label: {
      marginBottom: LINEAR_XXS,
    },
    leftIcon: {
      paddingRight: LINEAR_XS,
    },
    input: {
      ...TEXT,
      borderRadius: RADIUS_MD,
      flex: 1,
      flexWrap: 'nowrap',
      height: type === 'multiline' ? numberOfLines! * TEXT.lineHeight + 5 : 50,
      textAlignVertical: type === 'multiline' ? 'top' : 'auto',
    },
    inputContainer: {
      alignItems: 'center',
      backgroundColor: isError ? RED_50 : WHITE,
      borderColor: isError ? ERROR : WHITE,
      borderRadius: RADIUS_MD,
      borderWidth: 1.5,
      flexDirection: 'row',
      paddingHorizontal: LINEAR_XS,
      overflow: 'hidden',
    },
    rightIcon: {
      paddingLeft: LINEAR_XXS,
    },
  });
};

export { _generateStyles };
