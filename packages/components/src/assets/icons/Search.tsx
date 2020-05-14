import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { IIcon } from '.';

const Search = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M19.293 20.708l-3.35-3.351-.038-.041a8.009 8.009 0 111.411-1.416l.041.038 3.351 3.35a1 1 0 01-1.415 1.415zM5 11a6 6 0 106-6 6.007 6.007 0 00-6 6z' />
      <Path
        d='M20 21a.998.998 0 01-.707-.293l-3.35-3.35a1.027 1.027 0 01-.038-.04A7.96 7.96 0 0111 19c-4.41 0-8-3.589-8-8 0-4.41 3.59-8 8-8 4.411 0 8 3.59 8 8a7.96 7.96 0 01-1.684 4.905c.014.012.028.025.04.038l3.352 3.35A.998.998 0 0120 21zM11 5c-3.308 0-6 2.692-6 6s2.692 6 6 6c3.309 0 6-2.692 6-6s-2.691-6-6-6z'
        fill='none'
      />
    </Svg>
  );
};

const MemoSearch = React.memo(Search);
export default MemoSearch;
