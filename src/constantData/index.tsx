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

export const messages = [
  {
    group: "Family Get-Together",
    message: "Send a message to your guests",
    img: require("../assets/Ellipse 18.png"),
  },
  {
    group: "Asiyanbi Get-Together",
    message: "Send a message to your guests",
    img: require("../assets/Ellipse 18.png"),
  },
  {
    group: "Catalyst et Mj",
    message: "Send a message to your guests",
    img: require("../assets/Ellipse 18.png"),
  },
  {
    group: "Ileya Get-Together",
    message: "Send a message to your guests",
    img: require("../assets/Ellipse 18.png"),
  },
  {
    group: "Olosho Get-Together",
    message: "Send a message to your guests",
    img: require("../assets/Ellipse 18.png"),
  },
];
