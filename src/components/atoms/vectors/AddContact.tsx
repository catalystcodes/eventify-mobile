import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const AddContact = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" {...props}>
    <Path
      stroke="#1D1D1D"
      strokeWidth={2}
      d="M16.682 7a5.638 5.638 0 1 1-.002 11.277A5.638 5.638 0 0 1 16.682 7Z"
    />
    <Path
      stroke="#1D1D1D"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 30.001s-.039-2.941 2.043-5.617C13.617 19.789 20 22 20 22M24.341 21.318v8.17m-4.085-4.084h8.17"
    />
  </Svg>
);
export default AddContact;
