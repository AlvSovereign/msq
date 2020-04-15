import React, { useContext } from 'react';
import { TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { MsqThemeContext } from '../theme/ThemeContext';
import { RadioChecked, RadioUnchecked } from '../assets/icons';
import Typography from './Typography';

const RadioGroup = ({
  defaultSelectedId,
  isDisabled,
  options,
  optionSelected = defaultSelectedId
    ? options.find(o => o.id === defaultSelectedId)
    : options[0],
  style,
  setOptionSelected
}: RadioRadioGroupProps) => {
  const testDefaultSelectedId =
    defaultSelectedId && options.find(o => o.id === defaultSelectedId);
  if (
    defaultSelectedId === 0 ||
    (defaultSelectedId && !testDefaultSelectedId)
  ) {
    throw new Error(
      `The defaultSelectedId: ${defaultSelectedId} does not exist as an 'id' in the 'options' array provided to RadioGroup. Please check the "defaultSelectedId" value.`
    );
  }
  const theme = useContext(MsqThemeContext);
  const BLUE_500 = theme.colors.blue[500];
  const LIGHTGREY_100 = theme.colors.lightGrey[100];
  const LIGHTGREY_200 = theme.colors.lightGrey[200];

  const styles = StyleSheet.create({
    optionLabel: {},
    optionSubLabel: {
      marginLeft: 32
    },
    radioGroupContainer: {
      flex: 1
    },
    radioContainer: {
      alignItems: 'flex-start',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      marginVertical: theme.spacings.linear.xxs
    },
    radio: {
      alignItems: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '100%'
    },
    icon: {
      marginRight: theme.spacings.linear.xs
    }
  });

  const handlePress = (isOptionDisabled: boolean, value: any) => {
    if (!(isDisabled || isOptionDisabled)) {
      setOptionSelected(value);
    }
  };

  const isMatch = (id: Id) => id === optionSelected.id;

  const Radio = ({ isOptionDisabled, id, label, subLabel, value }: Option) => (
    <TouchableWithoutFeedback
      onPress={() =>
        handlePress(!!isOptionDisabled, {
          isOptionDisabled,
          id,
          label,
          subLabel,
          value
        })
      }>
      <View style={styles.radioContainer}>
        <View style={styles.radio}>
          {isMatch(id) ? (
            <RadioChecked
              fill={isDisabled || isOptionDisabled ? LIGHTGREY_100 : BLUE_500}
              style={styles.icon}
            />
          ) : (
            <RadioUnchecked
              fill={
                isDisabled || isOptionDisabled ? LIGHTGREY_100 : LIGHTGREY_200
              }
              style={styles.icon}
            />
          )}
          <Typography
            color={isDisabled || isOptionDisabled ? 'lightGrey' : 'black'}
            style={styles.optionLabel}
            variant='label'>
            {label}
          </Typography>
        </View>
        {subLabel && (
          <Typography
            color={'lightGrey'}
            style={styles.optionSubLabel}
            variant='body2'>
            {subLabel}
          </Typography>
        )}
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={[styles.radioGroupContainer, style]}>
      {options.map((option: Option) => (
        <Radio key={option.id} {...option} />
      ))}
    </View>
  );
};

export default RadioGroup;

interface RadioRadioGroupProps {
  defaultSelectedId?: Id;
  isDisabled?: boolean;
  options: Option[];
  optionSelected: any;
  style?: any;
  setOptionSelected: any;
}

interface Option {
  isOptionDisabled?: boolean;
  id: Id;
  label: string;
  subLabel?: string;
  value: any;
}

type Id = string | number;
