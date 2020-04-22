import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const FBLogo = ({ fill = 'none', height = 20, style, width = 20 }: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M17 1H3c-1.1 0-2 .9-2 2v14c0 1.101.9 2 2 2h7v-7H8V9.525h2v-2.05c0-2.164 1.212-3.684 3.766-3.684l1.803.002v2.605h-1.197c-.994 0-1.372.746-1.372 1.438v1.69h2.568L15 12h-2v7h4c1.1 0 2-.899 2-2V3c0-1.1-.9-2-2-2z' />
    </Svg>
  );
};

const MemoFBLogo = React.memo(FBLogo);

export default MemoFBLogo;
