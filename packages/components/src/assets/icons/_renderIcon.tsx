import React from 'react';
import {
  BookmarkOutline,
  ChevronRight,
  Clear,
  Discovery,
  FBLogo,
  GLogo,
  Library,
  PlayOutline,
  Search,
  Settings,
  ShareFilled,
} from '.';

const _renderIcon = (fill: string, icon: IconKey, styles?: any) => {
  switch (icon) {
    case 'bookmark':
      return <BookmarkOutline fill={fill} style={styles} />;
    case 'chevronRight':
      return <ChevronRight fill={fill} style={styles} />;
    case 'cross':
      return <Clear fill={fill} style={styles} />;
    case 'facebook':
      return <FBLogo fill={fill} style={styles} />;
    case 'google':
      return <GLogo fill={fill} style={styles} />;
    case 'library':
      return <Library fill={fill} style={styles} />;
    case 'news':
      return <Discovery fill={fill} style={styles} />;
    case 'play':
      return <PlayOutline fill={fill} style={styles} />;
    case 'search':
      return <Search fill={fill} style={styles} />;
    case 'settings':
      return <Settings fill={fill} style={styles} />;
    case 'share':
      return <ShareFilled fill={fill} style={styles} />;
    default:
      return null;
  }
};

export { _renderIcon };

export type IconKey =
  | 'bookmark'
  | 'chevronRight'
  | 'cross'
  | 'facebook'
  | 'google'
  | 'library'
  | 'news'
  | 'play'
  | 'search'
  | 'settings'
  | 'share';
