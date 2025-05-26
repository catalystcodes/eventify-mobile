import React from "react";
import { StyleSheet, View } from "react-native";
import { EventOverviewStackParams } from "../../utils/types";
import { createStackNavigator } from "@react-navigation/stack";
import CreateEvent from "../../screens/CreateEvent";
import CustomizeDetailsScreen from "../../screens/CustomizeDetailsScreen";

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
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventStack;
