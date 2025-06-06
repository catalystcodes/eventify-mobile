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
  feedback: undefined;
  notification: undefined;
};
export type EventStackParams = {
  events: undefined;
  eventOverview: undefined;
  budget: undefined;
  task_list: undefined;
  guest_list: undefined;
  createContact: undefined;
  addGuest: undefined;
};

export type EventOverviewStackParams = {
  goBack(): unknown;
  pop(arg0: number): unknown;
  navigate(arg0: string): unknown;
  createEvent: undefined;
  eventDetails: undefined;
  customizeDetails: {
    templateId: number;
    name: string;
    image: any;
  };
  initialPreview: {
    templateId: number;
    name: string;
    image: any;
  };
  addGuests: undefined;
  createContact: undefined;
  reviewAndSend: undefined;
  createEventDone: undefined;
};
