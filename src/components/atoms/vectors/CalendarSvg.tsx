import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const CalendarSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#333"
        d="M6.24 0a.77.77 0 0 1 .77.77v1.44h8.269V.78a.77.77 0 1 1 1.54 0v1.43H19.8A2.2 2.2 0 0 1 22 4.409V19.8A2.2 2.2 0 0 1 19.8 22H2.2A2.2 2.2 0 0 1 0 19.801V4.41a2.2 2.2 0 0 1 2.2-2.2h3.27V.77A.77.77 0 0 1 6.24 0Zm-4.7 8.516v11.285a.66.66 0 0 0 .66.66h17.6a.661.661 0 0 0 .66-.66V8.531L1.54 8.517Zm5.794 7.565v1.832H5.5v-1.832h1.834Zm4.582 0v1.832h-1.832v-1.832h1.832Zm4.584 0v1.832h-1.834v-1.832H16.5Zm-9.166-4.375v1.833H5.5v-1.833h1.834Zm4.582 0v1.833h-1.832v-1.833h1.832Zm4.584 0v1.833h-1.834v-1.833H16.5ZM5.47 3.75H2.2a.66.66 0 0 0-.66.66v2.568l18.92.016V4.409a.661.661 0 0 0-.66-.66h-2.981V4.77a.77.77 0 1 1-1.54 0V3.749H7.01V4.76a.77.77 0 1 1-1.54 0V3.749Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalendarSvg;
