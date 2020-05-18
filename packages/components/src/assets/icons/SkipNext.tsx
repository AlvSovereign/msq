import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const SkipNext = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z' />
      <Path d='M0 0h24v24H0z' fill='none' />
    </Svg>
  );
};

const MemoSkipNext = React.memo(SkipNext);
export default MemoSkipNext;
