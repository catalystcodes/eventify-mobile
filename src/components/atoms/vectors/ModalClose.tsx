import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ModalClose = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="m1.25 1.25 17.5 17.5m0-17.5-17.5 17.5"
    />
  </Svg>
);
export default ModalClose;
