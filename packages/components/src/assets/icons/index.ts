import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import FBLogo from './FBLogo';
import GLogo from './GLogo';
import Discovery from './Discovery';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import Search from './Search';
import { _renderIcon } from './_renderIcon';

export {
  Check,
  ChevronRight,
  Clear,
  Discovery,
  FBLogo,
  GLogo,
  RadioChecked,
  RadioUnchecked,
  _renderIcon,
  Search,
};

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
