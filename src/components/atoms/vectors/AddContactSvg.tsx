import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddContactSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeWidth={2}
      d="M9.682 1a5.638 5.638 0 1 1-.002 11.277A5.638 5.638 0 0 1 9.682 1Z"
    />
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 24.001s-.039-2.941 2.043-5.617C6.617 13.789 13 16 13 16M17.341 15.318v8.17m-4.085-4.084h8.17"
    />
  </Svg>
);
export default AddContactSvg;
