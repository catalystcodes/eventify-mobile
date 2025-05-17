import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/types";

interface HomeIconProps extends IconWithCustomProps {
  fill?: string;
}

const CreateEventIcon = ({ fill = "#848484", ...props }: HomeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={11.5} cy={11.5} r={10.5} stroke={fill} strokeWidth={2} />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M11.5 7v9M7 11.5h9"
    />
  </Svg>
);
export default CreateEventIcon;
