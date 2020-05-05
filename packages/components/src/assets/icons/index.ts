import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import Discovery from './Discovery';
import FBLogo from './FBLogo';
import GLogo from './GLogo';
import Library from './Library';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import Search from './Search';
import Settings from './Settings';
import { _renderIcon } from './_renderIcon';

export {
  Check,
  ChevronRight,
  Clear,
  Discovery,
  FBLogo,
  GLogo,
  Library,
  RadioChecked,
  RadioUnchecked,
  _renderIcon,
  Search,
  Settings,
};

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
