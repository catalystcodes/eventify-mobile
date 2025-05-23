import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SearchSvg = (props: SvgProps) => (
  <Svg width={24} height={18} fill="none" {...props}>
    <Path
      stroke="#AAA"
      strokeWidth={2}
      d="M7.62 1a6.62 6.62 0 1 1-.002 13.24A6.62 6.62 0 0 1 7.62 1Z"
    />
    <Path
      fill="#AAA"
      d="M16.055 16.708a1 1 0 0 0 1.414-1.414l-1.415 1.414Zm-3.81-3.81 3.81 3.81 1.414-1.414-3.81-3.81-1.414 1.415Z"
    />
  </Svg>
);
export default SearchSvg;
