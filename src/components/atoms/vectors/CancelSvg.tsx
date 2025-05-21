import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CancelSvg = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1 1 14 14m0-14L1 15"
    />
  </Svg>
);
export default CancelSvg;
