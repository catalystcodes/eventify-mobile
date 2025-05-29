import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const StartTimeIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      stroke="#848484"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8 14.665A6.667 6.667 0 1 0 8 1.332a6.667 6.667 0 0 0 0 13.333Z"
    />
    <Path
      stroke="#848484"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M8.003 4v4.003l2.826 2.827"
    />
  </Svg>
);
export default StartTimeIcon;
