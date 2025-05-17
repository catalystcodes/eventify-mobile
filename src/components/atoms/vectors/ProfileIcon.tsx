import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

import { IconWithCustomProps } from "../../../utils/types";

interface HomeIconProps extends IconWithCustomProps {
  fill?: string;
}

const ProfileIcon = ({ fill = "#848484", ...props }: HomeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={11.5} cy={11.5} r={10.5} stroke={fill} strokeWidth={2} />
    <Circle cx={11.5} cy={8.5} r={3.6} stroke={fill} strokeWidth={1.8} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18.156 19.535a19.69 19.69 0 0 0 1.5-1.231C18.619 15.816 15.36 14 11.5 14c-3.88 0-7.152 1.835-8.171 4.342.503.483 1.002.913 1.499 1.293.121-.812.653-1.669 1.7-2.407C7.728 16.38 9.48 15.8 11.5 15.8c2.02 0 3.772.58 4.973 1.428 1.003.708 1.534 1.525 1.683 2.307Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default ProfileIcon;
