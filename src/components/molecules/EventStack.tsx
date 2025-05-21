import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Events from "../../screens/Events";
import { EventStackParams } from "../../utils/types";
import EventOverview from "../../screens/EventOverview";

const Stack = createStackNavigator<EventStackParams>();

export default function EventStack() {
  const { Navigator, Screen } = Stack;
  return (
    <View style={{ flexGrow: 1 }}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="events"
      >
        <Screen name="events" component={Events} />
        <Screen name={"eventOverview"} component={EventOverview} />
      </Navigator>
    </View>
  );
}
