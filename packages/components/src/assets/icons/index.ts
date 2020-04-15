import Check from './Check';
import ChevronRight from './ChevronRight';
import Clear from './Clear';
import RadioChecked from './RadioChecked';
import RadioUnchecked from './RadioUnchecked';
import Search from './Search';

export { Check, ChevronRight, Clear, RadioChecked, RadioUnchecked, Search };

export interface IIcon extends React.SVGProps<SVGSVGElement> {
  style?: any;
}
