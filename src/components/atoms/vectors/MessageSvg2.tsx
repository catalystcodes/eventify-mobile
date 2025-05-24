import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const MessageSvg2 = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M5.815 13.527v4.533a.5.5 0 0 0 .866.341l4.871-5.215a.5.5 0 0 1 .366-.159h5.808a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v8.027a2 2 0 0 0 2 2h2.315a.5.5 0 0 1 .5.5Z"
    />
    <Path
      fill="#333"
      fillRule="evenodd"
      d="M10.232 17.464h4.779l4.723 5.056c.93.995 2.596.338 2.596-1.024v-4.032h1.816a3 3 0 0 0 3-3V6.437a3 3 0 0 0-3-3h-2.601v2h2.6a1 1 0 0 1 1 1v8.027a1 1 0 0 1-1 1H21.83a1.5 1.5 0 0 0-1.5 1.5v3.265l-4.006-4.289a1.5 1.5 0 0 0-1.096-.476H12.1l-1.868 2Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default MessageSvg2;
