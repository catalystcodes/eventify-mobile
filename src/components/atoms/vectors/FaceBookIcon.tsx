import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const FaceBookIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#039BE5"
        d="M13.5 2.917a11.083 11.083 0 1 0 0 22.167 11.083 11.083 0 0 0 0-22.167Z"
      />
      <Path
        fill="#fff"
        d="M15 16.937h2.869l.45-2.914H15v-1.592c0-1.21.396-2.284 1.529-2.284h1.82V7.604c-.32-.043-.997-.137-2.274-.137-2.668 0-4.232 1.409-4.232 4.618v1.938H9.1v2.914h2.742v8.009c.543.081 1.093.137 1.658.137.51 0 1.009-.047 1.5-.113v-8.033Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default FaceBookIcon;
