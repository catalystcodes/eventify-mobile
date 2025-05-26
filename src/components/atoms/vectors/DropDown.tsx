import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const DropDown = (props: SvgProps) => (
  <Svg width={15} height={10} fill="none" {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M13.139 1.75 7.36 8.25l-5.778-6.5"
    />
  </Svg>
);
export default DropDown;
