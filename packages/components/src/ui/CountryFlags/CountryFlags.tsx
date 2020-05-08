import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Flag } from 'react-native-svg-flagkit';
import Row from '../Row/Row';
import theme from '../../theme/theme';

const CountryFlags = ({ countries }: CountryFlagsProps) => {
  return (
    <>
      {countries.map((country: any) => {
        return (
          <View key={country} style={styles.flagContainer}>
            <Flag id={country} size={0.1} />
          </View>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  flagContainer: {
    marginRight: theme.spacing.LINEAR_XS,
  },
});

export default CountryFlags;

interface CountryFlagsProps {
  countries: string[];
}
