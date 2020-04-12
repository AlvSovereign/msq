import React from 'react';
import { ChevronRight, Search } from '../assets/icons';

const renderIcon = ({ fill, icon, styles }: IRenderIcon) => {
  switch (icon) {
    case 'chevronRight':
      return <ChevronRight fill={fill} style={styles} />;
    case 'search':
      return <Search fill={fill} style={styles} />;
    default:
      return null;
  }
};

export { renderIcon };

interface IRenderIcon {
  fill: string;
  icon: IconKey;
  styles?: any;
}

export type IconKey = 'chevronRight' | 'search';
