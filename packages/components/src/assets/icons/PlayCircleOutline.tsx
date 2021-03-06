import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IIcon } from '.';

const PlayCircleOutline = ({
  fill = 'none',
  height = 36,
  style,
  width = 36,
}: IIcon) => {
  return (
    <Svg
      fill={fill}
      height={height}
      style={style}
      viewBox='0 0 24 24'
      width={width}>
      <Path d='M0 0h24v24H0z' fill='none' />
      <Path d='M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
    </Svg>
  );
};

const MemoPlayCircleOutline = React.memo(PlayCircleOutline);
export default MemoPlayCircleOutline;
