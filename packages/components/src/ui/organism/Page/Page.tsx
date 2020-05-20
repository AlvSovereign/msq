import React, { ReactNode, useContext } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { MsqThemeContext, useResponsive } from '../../../theme/ThemeContext';
import { generateStyles } from './_generateStyles';

const Page = ({ backgroundImage, blur, children }: GridProps) => {
  const theme = useContext(MsqThemeContext);
  const breakpoints = useResponsive();
  const styles = generateStyles(breakpoints, theme);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {backgroundImage && (
        <Image
          blurRadius={3}
          source={backgroundImage}
          style={StyleSheet.absoluteFill}
        />
      )}
      {blur && <View style={[StyleSheet.absoluteFill, styles.blur]} />}
      <KeyboardAvoidingView style={styles.view}>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          contentContainerStyle={styles.scrollView}>
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Page;

interface GridProps {
  backgroundImage?: any;
  blur?: boolean;
  children: ReactNode;
}
