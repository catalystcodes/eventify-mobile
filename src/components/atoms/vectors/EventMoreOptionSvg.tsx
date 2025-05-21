import * as React from "react";
import Svg, { SvgProps, Rect, Circle } from "react-native-svg";
const EventMoreOptionSvg = (props: SvgProps) => (
  <Svg width={48} height={48} fill="none" {...props}>
    <Rect
      width={47}
      height={47}
      x={0.5}
      y={47.5}
      fill="#fff"
      rx={5.5}
      transform="rotate(-90 .5 47.5)"
    />
    <Rect
      width={47}
      height={47}
      x={0.5}
      y={47.5}
      stroke="#F0534F"
      rx={5.5}
      transform="rotate(-90 .5 47.5)"
    />
    <Circle
      cx={14}
      cy={24}
      r={3}
      fill="#F0534F"
      transform="rotate(-90 14 24)"
    />
    <Circle
      cx={24}
      cy={24}
      r={3}
      fill="#F0534F"
      transform="rotate(-90 24 24)"
    />
    <Circle
      cx={34}
      cy={24}
      r={3}
      fill="#F0534F"
      transform="rotate(-90 34 24)"
    />
  </Svg>
);
export default EventMoreOptionSvg;
