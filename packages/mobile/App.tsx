import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {theme, MsqThemeContext} from 'components/src/theme/ThemeContext';
import {Button, Typography, Page} from 'components/src/ui';

const Image = require('components/src/assets/images/bgImage.png');

export function App() {
  return (
    <MsqThemeContext.Provider value={theme}>
      <StatusBar barStyle="dark-content" />
      <Page backgroundImage={Image} blur={true}>
        <View style={styles.body}>
          <Typography color="black" variant="h2">
            Be Honest feat. DJ Omni &amp; DJ Ruivo
          </Typography>
          <Button
            label="Play"
            icon="chevronRight"
            onPress={() => {}}
            variant="primary"
          />
          <Button
            label="Play"
            icon="chevronRight"
            onPress={() => {}}
            variant="secondary"
          />
          <Button
            label="Play"
            isDisabled={true}
            onPress={() => {}}
            variant="primary"
          />
          <Button
            label="Play"
            icon="chevronRight"
            isDisabled={true}
            onPress={() => {}}
            variant="secondary"
          />
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Code sharing using Monorepo</Text>
            <Text style={styles.sectionDescription}>
              Edit
              <Text style={styles.highlight}>
                packages/components/App.tsx
              </Text>{' '}
              to change this screen and then come back to see your edits (in the
              phone or the browser).
            </Text>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>
              Web support via react-native-web
            </Text>
            <Text style={styles.sectionDescription}>
              Run <Text style={styles.highlight}>yarn workspace web start</Text>{' '}
              to open this app in the browser.
            </Text>
            <Text style={styles.sectionDescription}>
              It will share the same code from mobile, unless you create
              platform-specific files using the{' '}
              <Text style={styles.highlight}>.web.tsx</Text> extension (also
              supports <Text style={styles.highlight}>.android</Text>,{' '}
              <Text style={styles.highlight}>.ios</Text>,{' '}
              <Text style={styles.highlight}>.native</Text>, etc).
            </Text>
          </View>
        </View>
      </Page>
    </MsqThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: '#F5F9FB',
    // paddingHorizontal: 16,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'gray',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

declare var global: any;
