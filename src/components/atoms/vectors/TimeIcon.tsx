import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TimeIcon = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      stroke="#595959"
      strokeLinejoin="round"
      d="M6 11.168a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path
      stroke="#595959"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.002 3.168V6.17l2.12 2.12"
    />
  </Svg>
);
export default TimeIcon;
