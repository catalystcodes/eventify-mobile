import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";
const ShowMoreIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={3} cy={3} r={3} fill="#1D1D1D" />
    <Circle cx={3} cy={11} r={3} fill="#1D1D1D" />
    <Circle cx={3} cy={19} r={3} fill="#1D1D1D" />
  </Svg>
);
export default ShowMoreIcon;
