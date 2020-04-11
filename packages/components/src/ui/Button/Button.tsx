import React, { useContext, useRef } from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography';
import { _renderIcon } from './_renderIcons';

const Button = ({
  icon,
  isDisabled = false,
  onPress,
  label,
  variant
}: IButton) => {
  const ref = useRef(null);
  const isFocused = useFocus(ref);
  const isHovered = useHover(ref);
  const theme = useContext(MsqThemeContext);

  const BLUE_300 = theme.colors.blue[300];
  const BLUE_500 = theme.colors.blue[500];
  const BLUE_700 = theme.colors.blue[700];
  const LIGHTGREY_100 = theme.colors.lightGrey[100];
  const WHITE = theme.colors.white;

  const scaleValue = new Animated.Value(1);
  const buttonBgColorValue = new Animated.Value(0);
  const buttonBorderColorValue = new Animated.Value(0);
  const primaryButtonAnimBGColor = buttonBgColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BLUE_500, BLUE_700]
  });
  const secondaryButtonAnimBGColor = buttonBgColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [WHITE, LIGHTGREY_100]
  });
  const primaryButtonAnimBorderColor = buttonBorderColorValue.interpolate({
    inputRange: [0, 1],
    outputRange: [BLUE_500, BLUE_700]
  });

  const handlePressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 0
    }).start();

    Animated.timing(buttonBgColorValue, {
      toValue: 1,
      duration: 0.5
    }).start();

    Animated.timing(buttonBorderColorValue, {
      toValue: 1,
      duration: 0.5
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 0
    }).start();

    Animated.timing(buttonBgColorValue, {
      toValue: 0,
      duration: 1
    }).start();

    Animated.timing(buttonBorderColorValue, {
      toValue: 0,
      duration: 1
    }).start();
  };

  const styles: any = StyleSheet.create({
    button: {
      ...theme.spacings.radius.sm,
      alignItems: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      flexDirection: 'row',
      height: 40,
      justifyContent: 'center',
      marginBottom: theme.spacings.linear.xxs,
      minWidth: 40,
      padding: theme.spacings.linear.xxs,
      paddingHorizontal: !icon
        ? theme.spacings.linear.sm
        : theme.spacings.linear.xxs,
      transform: [{ scale: scaleValue }],
      width: 'auto'
    },
    primaryHover: {
      ...Platform.select({
        web: {
          backgroundColor: BLUE_700,
          boxShadow:
            '0 3px 1px -2px rgba(80, 80, 80,.2),0 2px 2px 0 rgba(80, 80, 80,.14),0 1px 5px 0 rgba(80, 80, 80,.12)'
        }
      })
    },
    secondaryHover: {
      ...Platform.select({
        web: {
          backgroundColor: LIGHTGREY_100,
          borderColor: BLUE_500,
          boxShadow:
            '0 3px 1px -2px rgba(80, 80, 80,.2),0 2px 2px 0 rgba(80, 80, 80,.14),0 1px 5px 0 rgba(80, 80, 80,.12)'
        }
      })
    },
    focused: {
      ...Platform.select({
        web: {
          backgroundColor: variant === 'primary' ? BLUE_500 : LIGHTGREY_100,
          borderColor: BLUE_500,
          boxShadow: 'none'
        }
      })
    },
    isDisabled: {
      backgroundColor: LIGHTGREY_100
    },
    typography: {
      flex: 1,
      marginRight: icon && theme.spacings.linear.xxs,
      marginLeft: icon && 12,
      textAlign: 'center'
    }
  });

  return (
    <TouchableWithoutFeedback
      ref={ref}
      disabled={isDisabled}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <Animated.View
        style={[
          styles.button,
          {
            backgroundColor:
              variant === 'primary'
                ? primaryButtonAnimBGColor
                : secondaryButtonAnimBGColor,
            borderColor: isDisabled
              ? LIGHTGREY_100
              : variant === 'primary'
              ? primaryButtonAnimBorderColor
              : BLUE_500
          },
          !isDisabled && isHovered && styles[`${variant}Hover`],
          !isDisabled && isFocused && styles.focused,
          isDisabled && styles.isDisabled
        ]}>
        {label && (
          <Typography
            color={isDisabled || variant === 'primary' ? 'white' : 'blue'}
            style={styles.typography}
            variant='button'>
            {label}
          </Typography>
        )}
        {icon &&
          _renderIcon({
            icon,
            styles,
            variant,
            isDisabled,
            colors: {
              BLUE_500,
              WHITE
            }
          })}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

export default Button;

interface IButton {
  icon?: Icon;
  isDisabled?: boolean;
  onPress: () => void;
  label?: string;
  variant: Variant;
}

export type Icon = 'chevronRight';
export type Variant = 'primary' | 'secondary';
