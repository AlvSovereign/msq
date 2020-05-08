import BookmarkOutline from './BookmarkOutline';
import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import Discovery from './Discovery';
import FBLogo from './FBLogo';
import GLogo from './GLogo';
import Library from './Library';
import PlayOutline from './PlayOutline';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import Search from './Search';
import Settings from './Settings';
import ShareFilled from './ShareFilled';
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
  PlayOutline,
  RadioChecked,
  RadioUnchecked,
  _renderIcon,
  Search,
  Settings,
  ShareFilled,
};

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
