import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowRight = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m10.111 7.223 6.5 5.777-6.5 5.778"
    />
  </Svg>
);
export default ArrowRight;
