import React from "react";
import { StyleSheet, View } from "react-native";
import { BottomTabIcon } from "../../constantData";
import HomeIcon from "../atoms/vectors/HomeIcon";
import EventIcon from "../atoms/vectors/EventIcon";
import CreateEventIcon from "../atoms/vectors/CreateEventIcon";
import MessagesIcon from "../atoms/vectors/MessagesIcon";
import ProfileIcon from "../atoms/vectors/ProfileIcon";

interface RenderAppIconProps {
  name: (typeof BottomTabIcon)[number]["name"];
  isSelected?: boolean;
  focused?: boolean;
}

const RenderAppIconBottomTab = ({
  name,
  isSelected,
  focused,
}: RenderAppIconProps) => {
  let result = focused ? <HomeIcon fill="#D35400" /> : <HomeIcon />;

  switch (name) {
    case "Home":
      break;
    case "Events":
      result = focused ? <EventIcon fill="#D35400" /> : <EventIcon />;
      break;
    case "Create Event":
      result = focused ? (
        <CreateEventIcon fill="#D35400" />
      ) : (
        <CreateEventIcon />
      );
      break;

    case "Messages":
      result = focused ? <MessagesIcon fill="#D35400" /> : <MessagesIcon />;
      break;
    case "Profile":
      result = focused ? <ProfileIcon fill="#D35400" /> : <ProfileIcon />;

    default:
      break;
  }
  return result;
};

const styles = StyleSheet.create({});

export default RenderAppIconBottomTab;
