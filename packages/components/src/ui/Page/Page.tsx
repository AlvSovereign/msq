import React, { ReactNode, useContext } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { BlurView, VibrancyView } from '@react-native-community/blur';
import { MsqThemeContext, useResponsive } from '../../theme/ThemeContext';
import { generateStyles } from './Page.styles';

const Page = ({ backgroundImage, blur, children }: GridProps) => {
  const theme = useContext(MsqThemeContext);
  const breakpoints = useResponsive();
  const styles = generateStyles(breakpoints, theme);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      {backgroundImage && (
        <Image
          source={backgroundImage}
          style={[StyleSheet.absoluteFill, styles.backgroundImage]}
        />
      )}
      <KeyboardAvoidingView style={styles.view}>
        {blur ? (
          Platform.OS === 'ios' ? (
            <VibrancyView
              style={[StyleSheet.absoluteFill]}
              blurType='light'
              blurAmount={1}
              reducedTransparencyFallbackColor='white'
            />
          ) : (
            <BlurView
              style={[StyleSheet.absoluteFill]}
              // viewRef={this.state.viewRef}
              blurType='light'
              blurAmount={32}
              reducedTransparencyFallbackColor='white'
            />
          )
        ) : null}
        <ScrollView contentInsetAdjustmentBehavior='automatic'>
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
