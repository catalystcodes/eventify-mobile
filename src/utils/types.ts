import { type } from "os";
import { SvgProps } from "react-native-svg";

export type RootStackParams = {
  login: undefined;
  welcomePage: undefined;
  createAccount: undefined;
  appBottomTab: undefined;
  messagesChat: undefined;
  preview: undefined;
  invitation: undefined;
};

export type WelcomePageStackParams = {
  navigate(arg0: string): unknown;
  login: undefined;
  createAccount: undefined;
};

export interface IconWithCustomProps extends SvgProps {
  isSelected?: boolean;
}

export type ProfileStackParams = {
  profile: undefined;
  editProfile: undefined;
  contactUs: undefined;
  notifications: undefined;
  faq: undefined;
  notification: undefined;
};
export type EventStackParams = {
  events: undefined;
  eventOverview: undefined;
  budget: undefined;
  task_list: undefined;
  guest_list: undefined;
};

export type EventOverviewStackParams = {
  navigate(
    arg0: string,
    arg1: { templateId: number; name: string; image: any }
  ): unknown;
  createEvent: undefined;
  eventDetails: undefined;
  customizeDetails: {
    templateId: number;
    name: string;
    image: any;
  };
  initialPreview: undefined;
};
