import React from "react";
import { StyleSheet, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParams } from "./utils/types";
import WelcomePage from "./screens/WelcomePage";
import Login from "./screens/login";
import CreateAccount from "./screens/CreateAccount";
import { heightPercentageToDP } from "react-native-responsive-screen";
import AppBottomTab from "./components/molecules/AppBottomTab";
import Profile from "./screens/Profile";
import MessagesChat from "./screens/MessagesChat";

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
        <Screen name="appBottomTab" component={AppBottomTab} />
        <Screen name="login" component={Login} />
        <Screen name="createAccount" component={CreateAccount} />
        <Screen name="messagesChat" component={MessagesChat} />
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
