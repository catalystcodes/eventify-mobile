import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EditSvg = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#333"
      d="M5.76 16.39 16.934 5.218 15.376 3.66 4.203 14.833v1.557h1.558Zm.914 2.204H2v-4.675L14.597 1.323a1.102 1.102 0 0 1 1.558 0l3.116 3.116a1.102 1.102 0 0 1 0 1.558L6.674 18.594ZM2 20.797h19.829V23H2v-2.203Z"
    />
  </Svg>
);
export default EditSvg;
