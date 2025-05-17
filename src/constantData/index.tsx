import CreateEventIcon from "../components/atoms/vectors/CreateEventIcon";
import EventIcon from "../components/atoms/vectors/EventIcon";
import HomeIcon from "../components/atoms/vectors/HomeIcon";
import MessagesIcon from "../components/atoms/vectors/MessagesIcon";
import ProfileIcon from "../components/atoms/vectors/ProfileIcon";

export const BottomTabIcon = [
  {
    name: "Home",
    Icon: HomeIcon,
  },
  {
    name: "Events",
    Icon: EventIcon,
  },
  {
    name: "Create Event",
    Icon: CreateEventIcon,
  },
  {
    name: "Messages",
    Icon: MessagesIcon,
  },
  {
    name: "Profile",
    Icon: ProfileIcon,
  },
] as const;
