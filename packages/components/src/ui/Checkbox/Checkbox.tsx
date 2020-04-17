import React, { useContext } from 'react';
import {
  Platform,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import RNCheckbox from '@react-native-community/checkbox';
import { CheckBox as RNWCheckbox } from 'react-native-web';
import { Check } from '../../assets/icons';
import { MsqThemeContext } from '../../theme/ThemeContext';
import Typography from '../Typography/Typography';
import { _generateStyles } from './_generateStyles';

const Checkbox = ({
  isDisabled,
  label,
  onValueChange,
  subLabel,
  value,
}: CheckboxProps) => {
  const theme = useContext(MsqThemeContext);
  const { BLUE_500, LIGHTGREY_100, LIGHTGREY_200 } = theme.color;
  const styles = _generateStyles(theme);

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
                true: BLUE_500,
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
