import React, { useContext } from 'react';
import { Platform, StyleSheet, Switch as RNSwitch, View } from 'react-native';
import RNCCheck from '@react-native-community/checkbox';
import { MsqThemeContext } from '../theme/ThemeContext';
import Typography from './Typography';

const Checkbox = ({
  isDisabled,
  label,
  onChange,
  onValueChange,
  value
}: CheckboxProps) => {
  const theme = useContext(MsqThemeContext);
  const BLUE_500 = theme.colors.blue[500];

  const styles = StyleSheet.create({
    checkboxContainer: {
      flexDirection: 'row'
    },
    checkbox: {
      flex: 1
    },
    container: {
      flexDirection: 'column'
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        {Platform.OS === 'ios' ? (
          <RNSwitch
            disabled={isDisabled}
            onValueChange={onChange}
            style={styles.checkbox}
            thumbColor={BLUE_500}
            value={value}
          />
        ) : (
          <RNCCheck
            disabled={isDisabled}
            onChange={onChange}
            onValueChange={onValueChange}
            style={styles.checkbox}
            tintColor={BLUE_500}
            value={value}
          />
        )}
        {label && (
          <Typography color='lightGrey' variant='body2'>
            {label}
          </Typography>
        )}
      </View>
      <View />
    </View>
  );
};

export default Checkbox;

interface CheckboxProps {
  isDisabled?: boolean;
  label?: string;
  onChange: () => void;
  onValueChange?: () => void;
  value: boolean;
}
