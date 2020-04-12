import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const ChevronRight = ({
  fill = 'none',
  height = 24,
  style,
  width = 24
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' />
      <Path d='M0 0h24v24H0z' fill='none' />
    </Svg>
  );
};

const MemoChevronRight = React.memo(ChevronRight);
export default MemoChevronRight;
