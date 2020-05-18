import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const Repeat = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z' />
    </Svg>
  );
};

const MemoRepeat = React.memo(Repeat);
export default MemoRepeat;
