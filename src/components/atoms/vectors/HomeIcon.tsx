import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

import { IconWithCustomProps } from "../../../utils/types";
interface HomeIconProps extends IconWithCustomProps {
  fill?: string;
}
const HomeIcon = ({ fill = "#848484", ...props }: HomeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={fill}
      strokeWidth={2}
      d="M1 8.84V21a1 1 0 0 0 1 1h4.861a1 1 0 0 0 1-1v-5.35a1 1 0 0 1 1-1h3.278a1 1 0 0 1 1 1V21a1 1 0 0 0 1 1H19a1 1 0 0 0 1-1V8.84a1 1 0 0 0-.388-.79l-8.5-6.577a1 1 0 0 0-1.224 0l-8.5 6.577A1 1 0 0 0 1 8.84Z"
    />
  </Svg>
);
export default HomeIcon;
