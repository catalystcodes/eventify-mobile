import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/types";

interface HomeIconProps extends IconWithCustomProps {
  fill?: string;
}

const EventIcon = ({ fill = "#848484", ...props }: HomeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={fill}
      strokeWidth={2}
      d="M2 3h17a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M6 5V1M15 5V1"
    />
  </Svg>
);
export default EventIcon;
