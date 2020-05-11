import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const MoreHorizontal = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
    </Svg>
  );
};

const MemoMoreHorizontal = React.memo(MoreHorizontal);
export default MemoMoreHorizontal;
