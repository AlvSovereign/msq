import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const PlaylistAdd = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z' />
    </Svg>
  );
};

const MemoPlaylistAdd = React.memo(PlaylistAdd);
export default MemoPlaylistAdd;
