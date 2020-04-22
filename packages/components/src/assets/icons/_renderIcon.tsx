import React from 'react';
import { ChevronRight, Clear, FBLogo, GLogo, Search } from '.';

const _renderIcon = (fill: string, icon: IconKey, styles?: any) => {
  switch (icon) {
    case 'chevronRight':
      return <ChevronRight fill={fill} style={styles} />;
    case 'cross':
      return <Clear fill={fill} style={styles} />;
    case 'facebook':
      return <FBLogo fill={fill} style={styles} />;
    case 'google':
      return <GLogo fill={fill} style={styles} />;
    case 'search':
      return <Search fill={fill} style={styles} />;
    default:
      return null;
  }
};

export { _renderIcon };

export type IconKey =
  | 'chevronRight'
  | 'cross'
  | 'facebook'
  | 'google'
  | 'search';
