import React, { ReactNode, useContext } from 'react';
import { View } from 'react-native';
import { useResponsive } from '../../../theme/hooks';
import { _generateStyles } from './_generateStyles';
import { MsqThemeContext } from 'components/src/theme/ThemeContext';
import { Player, SideDrawer } from '../../';

const AppFrame = ({ children }: AppFrameProps) => {
  const breakpoint = useResponsive();
  const theme = useContext(MsqThemeContext);

  const styles = _generateStyles(breakpoint, theme);

  return (
    <>
      <View style={styles.appFrameContainer}>
        {breakpoint !== 'sm' && <SideDrawer styles={styles} />}
        {children}
      </View>
      <Player />
    </>
  );
};

export default AppFrame;

interface AppFrameProps {
  children: ReactNode;
}
