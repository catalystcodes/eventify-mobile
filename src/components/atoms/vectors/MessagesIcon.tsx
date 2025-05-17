import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { IconWithCustomProps } from "../../../utils/types";

interface HomeIconProps extends IconWithCustomProps {
  fill?: string;
}

const MessagesIcon = ({ fill = "#848484", ...props }: HomeIconProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.801 13.492v4.514a.5.5 0 0 0 .865.341l4.855-5.196a.5.5 0 0 1 .365-.16h5.784a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7.992a2 2 0 0 0 2 2h2.301a.5.5 0 0 1 .5.5Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.201 17.418h4.768l4.706 5.037c.929.995 2.596.338 2.596-1.024v-4.013h1.8a3 3 0 0 0 3-3V6.426a3 3 0 0 0-3-3h-2.587v2h2.588a1 1 0 0 1 1 1v7.992a1 1 0 0 1-1 1H21.77a1.5 1.5 0 0 0-1.5 1.5v3.246l-3.989-4.27a1.5 1.5 0 0 0-1.096-.476H12.07l-1.869 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MessagesIcon;
