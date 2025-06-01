import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MailSvg = (props: SvgProps) => (
  <Svg
    fill="currentColor"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm17 4.238-7.928 7.1L4 7.216V19h16V7.238ZM4.511 5l7.55 6.662L19.502 5H4.511Z" />
  </Svg>
);
export default MailSvg;
