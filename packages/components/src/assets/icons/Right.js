import * as React from "react";
import Svg, { Defs, Path, Use } from "react-native-svg";

function Right(props) {
  return (
    <Svg width={7} height={11} {...props}>
      <Defs>
        <Path
          id="prefix__a"
          d="M8.254 8.936l3.871 3.863 3.871-3.863 1.19 1.189-5.061 5.06-5.06-5.06z"
        />
      </Defs>
      <Use
        fill="#5D6C76"
        transform="rotate(-90 4.125 13.06)"
        xlinkHref="#prefix__a"
        fillRule="evenodd"
      />
    </Svg>
  );
}

const MemoRight = React.memo(Right);
export default MemoRight;
