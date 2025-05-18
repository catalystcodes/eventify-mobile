import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SendMessageIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#F0534F"
      d="M.013 24 28 12 .013 0 0 9.333 20 12 0 14.667.013 24Z"
    />
  </Svg>
);
export default SendMessageIcon;
