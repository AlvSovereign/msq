import React, { useContext, useRef, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { useFocus, useHover } from 'react-native-web-hooks';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography';

const Input = ({ label, placeholder }: InputProps) => {
  const ref = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  // const isFocused = useFocus(ref);
  const theme = useContext(MsqThemeContext);
  const WHITE = theme.colors.white;
  const GREY_200 = theme.colors.lightGrey[200];

  const styles = StyleSheet.create({
    container: { marginBottom: theme.spacings.linear.lg, width: '100%' },
    focused: { borderColor: GREY_200 },
    label: {
      marginBottom: theme.spacings.linear.xxs
    },
    input: {
      ...theme.typography.input.text,
      ...theme.spacings.radius.md,
      backgroundColor: WHITE,
      height: 50,
      paddingLeft: theme.spacings.linear.sm
    },
    inputContainer: {
      ...theme.spacings.radius.md,
      borderColor: WHITE,
      borderWidth: 1.5
    }
  });

  return (
    <View ref={ref} style={styles.container}>
      {label && (
        <Typography color='lightGrey' style={styles.label} variant='label'>
          {label}
        </Typography>
      )}
      <View style={[styles.inputContainer, isFocused && styles.focused]}>
        <TextInput
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          style={[styles.input]}
        />
      </View>
    </View>
  );
};

export default Input;

interface InputProps {
  label?: string;
  placeholder: string;
}
