import React, { useContext, useRef, useState, ReactNode } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardTypeOptions,
  TouchableWithoutFeedback,
} from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography/Typography';
import { renderIcon, IconKey } from '../../assets/icons/renderIcon';
import { _generateStyles } from './_generateStyles';

const Input = ({
  isError,
  isErrorText,
  label,
  leftIcon,
  onChangeText,
  numberOfLines,
  onLeftIconPress,
  onRightIconPress,
  placeholder,
  rightIcon,
  type,
  value,
}: InputProps) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  // const isFocused = useFocus(ref);
  const theme = useContext(MsqThemeContext);
  const { ERROR, LIGHTGREY_100, LIGHTGREY_200, RED_50, WHITE } = theme.color;
  const styles = _generateStyles(theme, isError, numberOfLines, type);

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
                fill: isError || isFocused ? LIGHTGREY_200 : LIGHTGREY_100,
                icon: leftIcon,
              })}
            </View>
          </TouchableWithoutFeedback>
        )}
        <TextInput
          keyboardType={keyboardType}
          multiline={type === 'multiline'}
          numberOfLines={numberOfLines}
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
                styles,
              })}
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
      {isError && isErrorText && (
        <Typography color='error' style={styles.errorText} variant='body2'>
          {isErrorText}
        </Typography>
      )}
    </View>
  );
};

export default Input;

interface InputProps {
  isError?: boolean;
  isErrorText?: string;
  label?: string;
  leftIcon?: IconKey;
  numberOfLines?: number;
  onChangeText: (value: any) => any;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
  placeholder: string;
  rightIcon?: IconKey;
  type: TInputTypes;
  value: any;
}

export type TInputTypes =
  | 'email'
  | 'money'
  | 'multiline'
  | 'number'
  | 'phone'
  | 'password'
  | 'text';
