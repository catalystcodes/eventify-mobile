import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ArrowBack = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 1 2 9m0 0 9 8M2 9h20"
    />
  </Svg>
);
export default ArrowBack;
