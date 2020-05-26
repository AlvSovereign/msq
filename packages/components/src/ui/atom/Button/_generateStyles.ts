import { Platform, StyleSheet } from 'react-native';
import { ITheme } from '../../../theme/theme';
import { gutterBottomStyles } from '../../utils/commonStyles';
import { IconKey } from '../../../assets/icons/_renderIcon';
import { Variant } from './Button';

const _generateStyles = (
  theme: ITheme,
  variant: Variant,
  leftIcon?: IconKey | undefined,
  rightIcon?: IconKey | undefined
) => {
  const { BLUE_500, BLUE_700, BLUE_FB, LIGHTGREY_100, WHITE } = theme.color;
  const { LINEAR_SM, LINEAR_MD } = theme.spacing;

  return StyleSheet.create({
    buttonBase: {
      borderRadius: 4,
      height: 40,
      width: 'auto',
    },
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: LINEAR_MD,
      // paddingVertical: LINEAR_XXS,
      width: 'auto',
    },
    buttonHovered: {
      ...Platform.select({
        web: {
          opacity: 1,
          boxShadow:
            '0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)',
        },
      }),
    },
    primaryButton: {
      backgroundColor: BLUE_500,
      borderColor: BLUE_500,
    },
    secondaryButton: {
      backgroundColor: WHITE,
      borderColor: BLUE_500,
    },
    transparentButton: {
      backgroundColor: 'transparent',
      borderColor: 'transparent',
    },
    facebookButton: {
      backgroundColor: BLUE_FB,
      borderColor: BLUE_FB,
    },
    googleButton: {
      backgroundColor: WHITE,
      borderColor: WHITE,
    },
    primaryHovered: {
      borderColor: BLUE_500,
      ...Platform.select({
        web: {
          backgroundColor: BLUE_700,
          borderColor: BLUE_700,
        },
      }),
    },
    secondaryHovered: {
      ...Platform.select({
        web: {
          backgroundColor: LIGHTGREY_100,
          borderColor: BLUE_500,
        },
      }),
    },
    facebookHovered: {
      ...Platform.select({
        web: {
          backgroundColor: BLUE_FB,
          borderColor: BLUE_FB,
        },
      }),
    },
    googleHovered: {
      ...Platform.select({
        web: {
          backgroundColor: WHITE,
          borderColor: WHITE,
        },
      }),
    },
    buttonFocused: {
      ...Platform.select({
        web: {
          opacity: 1,
          boxShadow: 'none',
        },
      }),
    },
    buttonDisabled: {
      backgroundColor: LIGHTGREY_100,
      borderColor: LIGHTGREY_100,
    },
    typographyBase: {
      flex: 1,
      marginRight: rightIcon && LINEAR_MD,
      marginLeft: leftIcon && LINEAR_MD,
      textAlign: 'center',
    },
    primaryTypography: {
      color: WHITE,
    },
    secondaryTypography: {
      color: BLUE_500,
    },
    facebookTypography: {
      color: WHITE,
    },
    typographyDisabed: {
      color: WHITE,
    },
    ...gutterBottomStyles,
  });
};

export { _generateStyles };
