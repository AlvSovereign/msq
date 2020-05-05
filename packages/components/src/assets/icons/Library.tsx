import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const Library = ({ fill = 'none', height = 24, style, width = 24 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0V0z' fill='none' />
      <Path d='M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z' />
    </Svg>
  );
};

const MemoLibrary = React.memo(Library);
export default MemoLibrary;
