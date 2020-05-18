import React from 'react';
import {
  BookmarkOutline,
  ChevronRight,
  Clear,
  Discovery,
  FBLogo,
  GLogo,
  Library,
  MoreHorizontal,
  PlayCircleOutline,
  PlaylistAdd,
  PlayOutline,
  Repeat,
  Search,
  Settings,
  ShareFilled,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeUp,
} from '.';

const _renderIcon = ({ fill, icon, styles }: IRenderIcon) => {
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
    case 'more':
      return <MoreHorizontal fill={fill} style={styles} />;
    case 'news':
      return <Discovery fill={fill} style={styles} />;
    case 'play':
      return <PlayOutline fill={fill} style={styles} />;
    case 'playerPlay':
      return <PlayCircleOutline fill={fill} style={styles} />;
    case 'playlistAdd':
      return <PlaylistAdd fill={fill} style={styles} />;
    case 'repeat':
      return <Repeat fill={fill} style={styles} />;
    case 'search':
      return <Search fill={fill} style={styles} />;
    case 'settings':
      return <Settings fill={fill} style={styles} />;
    case 'share':
      return <ShareFilled fill={fill} style={styles} />;
    case 'shuffle':
      return <Shuffle fill={fill} style={styles} />;
    case 'skipNext':
      return <SkipNext fill={fill} style={styles} />;
    case 'skipPrevious':
      return <SkipPrevious fill={fill} style={styles} />;
    case 'volumeUp':
      return <VolumeUp fill={fill} style={styles} />;
    default:
      return null;
  }
};

export { _renderIcon };

interface IRenderIcon {
  fill: string;
  icon: IconKey;
  styles?: any;
}

export type IconKey =
  | 'bookmark'
  | 'chevronRight'
  | 'cross'
  | 'facebook'
  | 'google'
  | 'library'
  | 'more'
  | 'news'
  | 'play'
  | 'playerPlay'
  | 'playlistAdd'
  | 'repeat'
  | 'search'
  | 'settings'
  | 'share'
  | 'shuffle'
  | 'skipNext'
  | 'skipPrevious'
  | 'volumeUp';
