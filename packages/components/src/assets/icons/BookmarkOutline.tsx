import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const BookmarkOutline = ({
  fill = 'none',
  height = 24,
  style,
  width = 24,
}: IIcon) => {
  return (
    <Svg fill={fill} height={height} style={style} width={width}>
      <Path d='M0 0h24v24H0V0z' fill='none' />
      <Path d='M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z' />
    </Svg>
  );
};

const MemoBookmarkOutline = React.memo(BookmarkOutline);
export default MemoBookmarkOutline;
