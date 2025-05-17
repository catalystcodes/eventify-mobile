import { SvgProps } from "react-native-svg";

export type RootStackParams = {
  login: undefined;
  welcomePage: undefined;
  createAccount: undefined;
  appBottomTab: undefined;
};

export type WelcomePageStackParams = {
  navigate(arg0: string): unknown;
  login: undefined;
  createAccount: undefined;
};

export interface IconWithCustomProps extends SvgProps {
  isSelected?: boolean;
}
