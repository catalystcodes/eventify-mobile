import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const PreviewIcon = (props: SvgProps) => (
  <Svg width={26} height={26} fill="none" {...props}>
    <Path
      fill="#F0534F"
      d="M13 9.75a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Zm0-4.875c5.416 0 10.042 3.37 11.916 8.125-1.874 4.756-6.5 8.125-11.916 8.125-5.417 0-10.043-3.37-11.917-8.125C2.957 8.244 7.583 4.875 13 4.875ZM3.445 13a10.64 10.64 0 0 0 19.11 0 10.64 10.64 0 0 0-19.11 0Z"
    />
  </Svg>
);
export default PreviewIcon;
