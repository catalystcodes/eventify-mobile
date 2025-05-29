import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const StartDateIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#5A5A5A"
      d="M4.538 0a.56.56 0 0 1 .56.56v1.047h6.014V.567a.56.56 0 0 1 1.12 0v1.04H14.4a1.6 1.6 0 0 1 1.6 1.6V14.4A1.6 1.6 0 0 1 14.4 16H1.6A1.6 1.6 0 0 1 0 14.4V3.207a1.6 1.6 0 0 1 1.6-1.599h2.378V.56A.56.56 0 0 1 4.538 0ZM1.12 6.194V14.4a.48.48 0 0 0 .48.48h12.8a.48.48 0 0 0 .48-.48V6.205L1.12 6.194Zm4.214 5.501v1.333H4v-1.333h1.334Zm3.332 0v1.333H7.334v-1.333h1.332Zm3.334 0v1.333h-1.334v-1.333H12ZM5.334 8.514v1.332H4V8.514h1.334Zm3.332 0v1.332H7.334V8.514h1.332Zm3.334 0v1.332h-1.334V8.514H12ZM3.978 2.726H1.6a.48.48 0 0 0-.48.48v1.868l13.76.012v-1.88a.48.48 0 0 0-.48-.48h-2.168v.744a.56.56 0 0 1-1.12 0v-.744H5.098v.736a.56.56 0 0 1-1.12 0v-.736Z"
    />
  </Svg>
);
export default StartDateIcon;
