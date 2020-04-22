import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const Clear = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
      <Path d='M0 0h24v24H0z' fill='none' />
    </Svg>
  );
};

const MemoClear = React.memo(Clear);

export default MemoClear;
