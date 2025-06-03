import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const StarSvg = (props: SvgProps) => (
  <Svg width={30} height={30} fill="none" {...props}>
    <Path
      fill={props.fill ?? "#D9D9D9"}
      d="m15 0 3.368 10.365h10.898l-8.817 6.405 3.368 10.365L15 20.73l-8.817 6.405L9.551 16.77.734 10.365h10.898L15 0Z"
    />
  </Svg>
);
export default StarSvg;
