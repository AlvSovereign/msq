import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const SkipPrevious = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M6 6h2v12H6zm3.5 6l8.5 6V6z' />
      <Path d='M0 0h24v24H0z' fill='none' />
    </Svg>
  );
};

const MemoSkipPrevious = React.memo(SkipPrevious);
export default MemoSkipPrevious;
