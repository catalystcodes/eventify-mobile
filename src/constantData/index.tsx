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

export const guestsList = [
  {
    initials: "AA",
    fullname: "Asiyanbi Abdulmujib (Host)",
    remark: "Going",
  },
  {
    initials: "CC",
    fullname: "Catalyst Code (Host)",
    remark: "Going",
  },
  {
    initials: "AD",
    fullname: "Ashel Dsouza",
    remark: "Waiting for RSVP",
  },
  {
    initials: "BM",
    fullname: "Bianca Matthews",
    remark: "Waiting for RSVP",
  },
  {
    initials: "CD",
    fullname: "Colin Dsouza",
    remark: "Waiting for RSVP",
  },
  {
    initials: "DT",
    fullname: "Dylan Thomas",
    remark: "Going",
  },
  {
    initials: "DT",
    fullname: "Daniel Thomas",
    remark: "Not Going",
  },
  {
    initials: "DG",
    fullname: "Dencel George",
    remark: "Not Going",
  },
  {
    initials: "EA",
    fullname: "Esther Abraham",
    remark: "Waiting for RSVP",
  },
  {
    initials: "AM",
    fullname: "Asiyanbi Mubashir",
    remark: "Waiting for RSVP",
  },
  {
    initials: "TB",
    fullname: "The Bolongo",
    remark: "Not Going",
  },
  {
    initials: "AN",
    fullname: "Asiyanbi Naim",
    remark: "Waiting for RSVP",
  },
] as const;

export const guestData = [
  {
    email: "asiyanbiakorede@gmail.com",
    fullname: "Asiyanbi Abdulmujib (Host)",
    people: "10 Adults",
  },
  {
    email: "catalystcode@gmail.com",
    fullname: "Catalyst Code (Host)",
    people: "5 Adults",
  },
  {
    email: "asheld98@server.com",
    fullname: "Ashel Dsouza",
    people: "Not Yet Replied",
  },
  {
    email: "biancamatt30@server.com",
    fullname: "Bianca Matthews",
    people: "No",
  },
  {
    email: "colindsouza9@server.com",
    fullname: "Colin Dsouza",
    people: "2 Adults",
  },
  {
    email: "dylanthomas@server.com",
    fullname: "Dylan Thomas",
    people: "Not Yet Replied",
  },
  {
    email: "danielthomas06@server.com",
    fullname: "Daniel Thomas",
    people: "Not Yet Replied",
  },
  {
    email: "dencelgeo@server.com",
    fullname: "Dencel George",
    people: "Not Yet Replied",
  },
  {
    email: "estherab3@server.com",
    fullname: "Esther Abraham",
    people: "No",
  },
  {
    email: "asiyanbimubashir@gmail.com",
    fullname: "Asiyanbi Mubashir",
    people: "1 Adult",
  },
  {
    email: "bolongo@gmail.com",
    fullname: "The Bolongo",
    people: "No",
  },
  {
    email: "ifenaim@gmail.com",
    fullname: "Asiyanbi Naim",
    people: "Not Yet Replied",
  },
];
