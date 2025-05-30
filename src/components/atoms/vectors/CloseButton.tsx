import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const CloseButton = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="m6.25 6.25 17.5 17.5m0-17.5-17.5 17.5"
    />
  </Svg>
);
export default CloseButton;
