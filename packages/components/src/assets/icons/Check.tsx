import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const Check = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z' />
    </Svg>
  );
};

const MemoCheck = React.memo(Check);
export default MemoCheck;
