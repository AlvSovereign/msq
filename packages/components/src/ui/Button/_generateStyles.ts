import { Platform, StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';
import { IconKey } from '../../assets/icons/renderIcon';
import { Variant } from './Button';

const _generateStyles = (
  theme: ITheme,
  icon: IconKey | undefined,
  variant: Variant,
  scaleValue: any
) => {
  const { BLUE_500, BLUE_700, LIGHTGREY_100 } = theme.color;
  const { LINEAR_SM, LINEAR_XXS, RADIUS_SM } = theme.spacing;

  return StyleSheet.create({
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: RADIUS_SM,
      borderWidth: 2,
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      marginBottom: LINEAR_XXS,
      flex: 1,
      padding: LINEAR_XXS,
      paddingHorizontal: !icon ? LINEAR_SM : LINEAR_XXS,
      transform: [{ scale: scaleValue }],
      width: 'auto',
    },
    primaryHover: {
      ...Platform.select({
        web: {
          backgroundColor: BLUE_700,
          boxShadow:
            '0 3px 1px -2px rgba(80, 80, 80,.2),0 2px 2px 0 rgba(80, 80, 80,.14),0 1px 5px 0 rgba(80, 80, 80,.12)',
        },
      }),
    },
    secondaryHover: {
      ...Platform.select({
        web: {
          backgroundColor: LIGHTGREY_100,
          borderColor: BLUE_500,
          boxShadow:
            '0 3px 1px -2px rgba(80, 80, 80,.2),0 2px 2px 0 rgba(80, 80, 80,.14),0 1px 5px 0 rgba(80, 80, 80,.12)',
        },
      }),
    },
    focused: {
      ...Platform.select({
        web: {
          backgroundColor: variant === 'primary' ? BLUE_500 : LIGHTGREY_100,
          borderColor: BLUE_500,
          boxShadow: 'none',
        },
      }),
    },
    isDisabled: {
      backgroundColor: LIGHTGREY_100,
    },
    typography: {
      flex: 1,
      marginRight: icon && LINEAR_XXS,
      marginLeft: icon && 12,
      textAlign: 'center',
    },
  });
};

export { _generateStyles };
