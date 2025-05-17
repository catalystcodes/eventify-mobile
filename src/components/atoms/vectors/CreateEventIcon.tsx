import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";
const CreateEventIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Circle cx={11.5} cy={11.5} r={10.5} stroke="#848484" strokeWidth={2} />
    <Path
      stroke="#848484"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11.5 7v9M7 11.5h9"
    />
  </Svg>
);
export default CreateEventIcon;
