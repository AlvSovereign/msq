import BookmarkOutline from './BookmarkOutline';
import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import Discovery from './Discovery';
import FBLogo from './FBLogo';
import GLogo from './GLogo';
import Library from './Library';
import MoreHorizontal from './MoreHorizontal';
import PlayCircleOutline from './PlayCircleOutline';
import PauseCircleOutline from './PauseCircleOutline';
import PlaylistAdd from './PlaylistAdd';
import PlayOutline from './PlayOutline';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import Repeat from './Repeat';
import Search from './Search';
import Settings from './Settings';
import ShareFilled from './ShareFilled';
import Shuffle from './Shuffle';
import SkipNext from './SkipNext';
import SkipPrevious from './SkipPrevious';
import VolumeUp from './VolumeUp';
import { _renderIcon } from './_renderIcon';

export {
  BookmarkOutline,
  Check,
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
  PauseCircleOutline,
  RadioChecked,
  RadioUnchecked,
  Repeat,
  _renderIcon,
  Search,
  Settings,
  ShareFilled,
  Shuffle,
  SkipNext,
  SkipPrevious,
  VolumeUp,
};

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
