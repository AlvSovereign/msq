import React, { useContext, useRef, useState, ReactNode } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardTypeOptions,
  TouchableWithoutFeedback
} from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography';
import { renderIcon, IconKey } from '../renderIcon';

const Input = ({
  label,
  leftIcon,
  onChangeText,
  onLeftIconPress,
  onRightIconPress,
  placeholder,
  rightIcon,
  type,
  value
}: InputProps) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  // const isFocused = useFocus(ref);
  const theme = useContext(MsqThemeContext);
  const WHITE = theme.colors.white;
  const LIGHTGREY_100 = theme.colors.lightGrey[100];
  const LIGHTGREY_200 = theme.colors.lightGrey[200];

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      marginBottom: theme.spacings.linear.lg,
      width: '100%'
    },
    focused: { borderColor: LIGHTGREY_200 },
    label: {
      marginBottom: theme.spacings.linear.xxs
    },
    leftIcon: {
      paddingRight: theme.spacings.linear.xs
    },

    input: {
      ...theme.typography.input.text,
      ...theme.spacings.radius.md,
      flex: 1,
      flexWrap: 'nowrap',
      height: 50,
      textAlignVertical: type === 'multiline' ? 'top' : 'auto'
    },
    inputContainer: {
      ...theme.spacings.radius.md,
      alignItems: 'center',
      backgroundColor: WHITE,
      borderColor: WHITE,
      borderWidth: 1.5,
      flexDirection: 'row',
      paddingHorizontal: theme.spacings.linear.xs,
      overflow: 'hidden'
    },
    rightIcon: {
      paddingLeft: theme.spacings.linear.xxs
    }
  });

  let keyboardType: KeyboardTypeOptions;

  switch (type) {
    case 'email':
      keyboardType = 'email-address';
      break;
    case 'money':
    case 'number':
      keyboardType = 'numeric';
      break;
    case 'phone':
      keyboardType = 'phone-pad';
      break;
    case 'text':
      keyboardType = 'url';
      break;
    default:
      keyboardType = 'default';
      break;
  }

  return (
    <View ref={ref} style={styles.container}>
      {label && (
        <Typography color='lightGrey' style={styles.label} variant='label'>
          {label}
        </Typography>
      )}
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
        {leftIcon && (
          <TouchableWithoutFeedback onPress={onLeftIconPress}>
            <View style={styles.leftIcon}>
              {renderIcon({
                fill: isFocused ? LIGHTGREY_200 : LIGHTGREY_100,
                icon: leftIcon
              })}
            </View>
          </TouchableWithoutFeedback>
        )}
        <TextInput
          keyboardType={keyboardType}
          multiline={type === 'multiline'}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={LIGHTGREY_200}
          style={[styles.input]}
          value={value}
        />
        {rightIcon && (
          <TouchableWithoutFeedback onPress={onRightIconPress}>
            <View style={styles.rightIcon}>
              {renderIcon({
                fill: isFocused ? LIGHTGREY_200 : LIGHTGREY_100,
                icon: rightIcon,
                styles
              })}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </View>
  );
};

export default Input;

interface InputProps {
  label?: string;
  leftIcon?: IconKey;
  onChangeText: (value: any) => any;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  placeholder: string;
  rightIcon?: IconKey;
  type: 'email' | 'money' | 'multiline' | 'number' | 'phone' | 'text';
  value: any;
}
