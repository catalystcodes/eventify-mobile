import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const MoreOptionsSvg = (props: SvgProps) => (
  <Svg width={24} height={15} fill="none" {...props}>
    <Circle cx={2.5} cy={2.5} r={2.5} fill="#1D1D1D" />
    <Circle cx={11.5} cy={2.5} r={2.5} fill="#1D1D1D" />
    <Circle cx={20.5} cy={2.5} r={2.5} fill="#1D1D1D" />
  </Svg>
);
export default MoreOptionsSvg;
