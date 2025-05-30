import React from "react";
import { StyleSheet, View } from "react-native";
import { EventOverviewStackParams } from "../../utils/types";
import { createStackNavigator } from "@react-navigation/stack";
import CreateEvent from "../../screens/CreateEvent";
import CustomizeDetailsScreen from "../../screens/CustomizeDetailsScreen";
import EventDetails from "../../screens/EventDetails";
import InitialPreview from "../../screens/InitialPreview";
import AddGuest from "../../screens/AddGuest";

const Stack = createStackNavigator<EventOverviewStackParams>();

const CreateEventStack = () => {
  const { Navigator, Screen } = Stack;

  return (
    <View style={{ flex: 1 }}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="createEvent"
      >
        <Screen name="createEvent" component={CreateEvent} />
        <Screen name="customizeDetails" component={CustomizeDetailsScreen} />
        <Screen name="eventDetails" component={EventDetails} />
        <Screen name="initialPreview" component={InitialPreview} />
        <Screen name="addGuest" component={AddGuest} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventStack;
