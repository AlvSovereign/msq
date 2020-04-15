import React, { useContext } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import RNCheckbox from '@react-native-community/checkbox';
import { CheckBox as RNWCheckbox } from 'react-native-web';
import { Check } from '../assets/icons';
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
  const LIGHTGREY_100 = theme.colors.lightGrey[100];
  const LIGHTGREY_200 = theme.colors.lightGrey[200];
  const styles = StyleSheet.create({
    checkbox: {
      marginLeft: 0,
      marginRight: theme.spacings.linear.xs,
      marginVertical: 0
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
      marginLeft: Platform.OS === 'web' ? 24 : 32
    }
  });

  const handlePress = () => {
    !isDisabled && onValueChange();
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          {Platform.OS === 'ios' ? (
            <View>
              <Check
                fill={
                  isDisabled ? LIGHTGREY_100 : !value ? LIGHTGREY_200 : BLUE_500
                }
                style={styles.checkbox}
              />
            </View>
          ) : Platform.OS === 'android' ? (
            <RNCheckbox
              disabled={isDisabled}
              onValueChange={onValueChange}
              style={styles.checkbox}
              tintColors={{
                false: isDisabled ? LIGHTGREY_100 : LIGHTGREY_200,
                true: BLUE_500
              }}
              value={value}
            />
          ) : (
            <RNWCheckbox
              color={BLUE_500}
              disabled={isDisabled}
              style={styles.checkbox}
              value={value}
            />
          )}
          {label && (
            <Typography
              color={isDisabled ? 'lightGrey' : 'black'}
              style={styles.label}
              variant='label'>
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
    </TouchableWithoutFeedback>
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
