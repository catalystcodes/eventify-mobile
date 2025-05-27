import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const EditIcon = (props: SvgProps) => (
  <Svg width={18} height={21} fill="none" {...props}>
    <Path
      fill="#1976D2"
      d="M3.414 14.889 13.556 4.747l-1.414-1.414L2 13.475v1.414h1.414Zm.829 2H0v-4.243L11.435 1.21a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414L4.243 16.889Zm-4.243 2h18v2H0v-2Z"
    />
  </Svg>
);
export default EditIcon;
