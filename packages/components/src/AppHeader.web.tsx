import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Typography } from './Typography';

export function AppHeader() {
  return (
    <View style={styles.container}>
      <Typography color='yellow' variant='hero'>
        Welcome to React Native Web + Monorepo
      </Typography>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 200,
    backgroundColor: '#f3f3f3',
  },
});
