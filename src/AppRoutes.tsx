import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./utils/types";
import WelcomePage from "./screens/WelcomePage";
import Login from "./screens/login";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={styles.container}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="welcomePage"
      >
        <Screen name="welcomePage" component={WelcomePage} />
        <Screen name="login" component={Login} />
      </Navigator>
    </View>
  );
};

export default AppRoutes;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
