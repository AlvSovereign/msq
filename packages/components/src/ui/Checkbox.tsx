import React, { useCallback, useContext, useRef } from 'react';
import { Platform, StyleSheet, Switch as RNSwitch, View } from 'react-native';
import RNCheckbox from '@react-native-community/checkbox';
import { CheckBox as RNWCheckbox } from 'react-native-web';
import { MsqThemeContext } from '../theme/ThemeContext';
import Typography from './Typography';

const Checkbox = ({
  isDisabled,
  label,
  onValueChange,
  subLabel,
  value
}: CheckboxProps) => {
  const theme = useContext(MsqThemeContext);
  const BLUE_500 = theme.colors.blue[500];
  const styles = StyleSheet.create({
    checkbox: {
      marginLeft: 0,
      marginRight: theme.spacings.linear.xs,
      marginVertical: Platform.OS === 'web' ? 4 : 0
    },
    checkboxContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center'
    },
    container: {
      flexDirection: 'column',
      flex: 1,
      marginVertical: theme.spacings.linear.xs
    },
    label: {
      flex: 1
    },
    subLabel: {
      marginLeft:
        Platform.OS === 'ios' ? 59 : Platform.OS === 'android' ? 40 : 24
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        {Platform.OS === 'ios' ? (
          <RNSwitch
            disabled={isDisabled}
            onValueChange={onValueChange}
            style={styles.checkbox}
            trackColor={{ false: '', true: BLUE_500 }}
            value={value}
          />
        ) : Platform.OS === 'android' ? (
          <RNCheckbox
            disabled={isDisabled}
            onValueChange={onValueChange}
            style={styles.checkbox}
            tintColors={{ false: '', true: BLUE_500 }}
            value={value}
          />
        ) : (
          <RNWCheckbox
            color={BLUE_500}
            disabled={isDisabled}
            onValueChange={onValueChange}
            style={styles.checkbox}
            value={value}
          />
        )}
        {label && (
          <Typography color='black' style={styles.label} variant='label'>
            {label}
          </Typography>
        )}
      </View>
      {subLabel && (
        <Typography color='lightGrey' style={styles.subLabel} variant='body2'>
          {subLabel}
        </Typography>
      )}
    </View>
  );
};

export default Checkbox;

interface CheckboxProps {
  isDisabled?: boolean;
  label?: string;
  onValueChange: () => void;
  subLabel?: string;
  value: boolean;
}
