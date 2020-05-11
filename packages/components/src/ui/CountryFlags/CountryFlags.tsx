import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Flag } from 'react-native-svg-flagkit';
import Row from '../Row/Row';
import theme from '../../theme/theme';
import { TGutterBottom, gutterBottomStyles } from '../utils/commonStyles';

const CountryFlags = ({ countries, gutterBottom }: CountryFlagsProps) => {
  return (
    <View style={[styles.containaer, gutterBottom && styles[gutterBottom]]}>
      {countries.map((country: any) => {
        return (
          <View key={country} style={styles.flagContainer}>
            <Flag id={country} size={0.1} />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  ...gutterBottomStyles,
  containaer: {
    flexDirection: 'row',
  },
  flagContainer: {
    marginRight: theme.spacing.LINEAR_XS,
  },
});

export default CountryFlags;

interface CountryFlagsProps {
  countries: string[];
  gutterBottom?: TGutterBottom;
}
