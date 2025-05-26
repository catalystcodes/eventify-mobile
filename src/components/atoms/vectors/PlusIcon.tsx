import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const PlusIcon = (props: SvgProps) => (
  <Svg width={23} height={23} fill="none" {...props}>
    <Circle cx={11.5} cy={11.5} r={11.5} fill="#F0534F" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11.5 7v9M7 11.5h9"
    />
  </Svg>
);
export default PlusIcon;
