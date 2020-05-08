import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Animated from 'react-native-reanimated';
import { Row, Typography } from '../../ui';

const RenderTabBar = ({
  index,
  setTabIndex,
  styles,
  navigationState,
}: RenderTabBarProps) => {
  const inputRange = navigationState.routes.map((x, i) => i);

  return (
    <Row orientation='row' style={styles.tabBar}>
      {navigationState.routes.map((route, i) => {
        return (
          <TouchableOpacity
            key={i}
            style={[styles.tabBarItem, index === i && styles.tabIndicator]}
            onPress={() => setTabIndex(i)}>
            <Typography
              color='white'
              style={index !== i && styles.inactiveTabFont}
              variant='label'>
              {route.title}
            </Typography>
          </TouchableOpacity>
        );
      })}
    </Row>
  );
};

export default RenderTabBar;

interface RenderTabBarProps {
  index: number;
  setTabIndex: any;
  styles: any;
  navigationState: any;
}
