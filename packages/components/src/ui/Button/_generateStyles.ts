import { Platform, StyleSheet } from 'react-native';
import { ITheme } from '../../theme/theme';
import { getGutterBottomWidth, TGutterBottom } from '../utils/commonStyles';
import { IconKey } from '../../assets/icons/renderIcon';
import { Variant } from './Button';

const _generateStyles = (
  gutterBottom: TGutterBottom | undefined,
  theme: ITheme,
  icon: IconKey | undefined,
  variant: Variant
) => {
  const {
    BLACK,
    BLUE_500,
    BLUE_700,
    BLUE_900,
    LIGHTGREY_100,
    WHITE,
  } = theme.color;
  const { LINEAR_SM, LINEAR_XXS, RADIUS_SM } = theme.spacing;

  return StyleSheet.create({
    button: {
      alignItems: 'center',
      alignSelf: 'center',
      borderColor: BLUE_500,
      borderRadius: RADIUS_SM,
      borderWidth: 2,
      // flex: 1,
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      padding: LINEAR_XXS,
      paddingHorizontal: !icon ? LINEAR_SM : LINEAR_XXS,
      width: '100%',
    },
    buttonForeground: {
      backgroundColor: BLACK,
      borderWidth: 2,
      borderColor: BLACK,
      borderRadius: 4,
      margin: -2,
      opacity: 0,
      zIndex: -1,
    },
    primaryButton: {
      backgroundColor: BLUE_500,
    },
    secondaryButton: {
      backgroundColor: WHITE,
    },
    buttonHovered: {
      ...Platform.select({
        web: {
          backgroundColor: variant === 'primary' ? BLUE_700 : LIGHTGREY_100,
          borderColor: variant === 'primary' ? BLUE_700 : BLUE_500,
          boxShadow:
            '0 3px 1px -2px rgba(80, 80, 80,.2),0 2px 2px 0 rgba(80, 80, 80,.14),0 1px 5px 0 rgba(80, 80, 80,.12)',
        },
      }),
    },
    buttonFocused: {
      backgroundColor: variant === 'primary' ? BLUE_900 : LIGHTGREY_100,
      borderColor: BLUE_900,
      ...Platform.select({
        web: {
          boxShadow: 'none',
        },
      }),
    },
    buttonDisabled: {
      backgroundColor: LIGHTGREY_100,
      borderColor: LIGHTGREY_100,
    },
    gutterBottom: {
      marginBottom: gutterBottom ? getGutterBottomWidth(gutterBottom) : 0,
    },
    typography: {
      color: variant === 'primary' ? WHITE : BLUE_500,
      flex: 1,
      marginRight: icon && LINEAR_XXS,
      marginLeft: icon && 12,
      textAlign: 'center',
    },
    typographyDisabed: {
      color: WHITE,
    },
    typographyFocused: {
      color: variant === 'primary' ? WHITE : BLUE_900,
    },
  });
};

export { _generateStyles };
