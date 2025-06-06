import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Events from "../../screens/Events";
import { EventStackParams } from "../../utils/types";
import EventOverview from "../../screens/EventOverview";
import GuestList from "../../screens/GuestList";
import TaskList from "../../screens/TaskList";
import Budget from "../../screens/Budget";
import CreateContact from "../../screens/CreateContact";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import AddGuest from "../../screens/AddGuest";

const Stack = createStackNavigator<EventStackParams>();

const EventStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={{ flexGrow: 1 }}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="events"
      >
        <Screen
          name="events"
          component={Events}
          // listeners={({ navigation }) => ({
          //   focus: () => {
          //     const parent = navigation.getParent();
          //     if (parent) {
          //       parent.setOptions({
          //         tabBarStyle: { display: "flex" },
          //       });
          //     }
          //   },
          // })}
        />
        <Screen
          name={"eventOverview"}
          component={EventOverview}
          // listeners={({ navigation }) => ({
          //   focus: () => {
          //     const parent = navigation.getParent();
          //     if (parent) {
          //       parent.setOptions({
          //         tabBarStyle: { display: "flex" },
          //       });
          //     }
          //   },
          // })}
        />
        <Screen
          //  focus is also added here because this screen precedes the create-contact screen,so that if you navigate back from the contact page the bottom screen can show again,bottomTab does'nt show when you go back to the guestList from create-contact without adding this focus.
          name="guest_list"
          component={GuestList}
          listeners={({ navigation }) => ({
            focus: () => {
              const parent = navigation.getParent();
              if (parent) {
                parent.setOptions({
                  tabBarStyle: {
                    display: "flex",
                    paddingTop: hp(1.2),
                  },
                });
              }
            },
          })}
        />
        <Screen
          name="task_list"
          component={TaskList}
          // listeners={({ navigation }) => ({
          //   focus: () => {
          //     const parent = navigation.getParent();
          //     if (parent) {
          //       parent.setOptions({
          //         tabBarStyle: { display: "flex" },
          //       });
          //     }
          //   },
          // })}
        />
        <Screen
          name="budget"
          component={Budget}
          // listeners={({ navigation }) => ({
          //   focus: () => {
          //     const parent = navigation.getParent();
          //     if (parent) {

          //       parent.setOptions({
          //         tabBarStyle: { display: "flex" },
          //       });
          //     }
          //   },
          // })}
        />
        <Screen
          name="createContact"
          component={CreateContact}
          // listener   added to hide bottomTab on focus on this screen
          listeners={({ navigation }) => ({
            focus: () => {
              const parent = navigation.getParent();
              if (parent) {
                parent.setOptions({
                  tabBarStyle: { display: "none" },
                });
              }
            },
          })}
        />
        <Screen
          name="addGuest"
          component={AddGuest}
          // listener   added to hide bottomTab on focus on this screen
          listeners={({ navigation }) => ({
            focus: () => {
              const parent = navigation.getParent();
              if (parent) {
                parent.setOptions({
                  tabBarStyle: { display: "none" },
                });
              }
            },
          })}
        />
      </Navigator>
    </View>
  );
};
export default EventStack;
