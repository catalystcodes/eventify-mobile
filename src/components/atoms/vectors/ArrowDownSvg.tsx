import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowDownSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12.777 1.111 7 7.611l-5.778-6.5"
    />
  </Svg>
);
export default ArrowDownSvg;
