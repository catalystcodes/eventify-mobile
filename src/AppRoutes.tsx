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
import Invitation from "./screens/Invitation";
import Preview from "./screens/Preview";
import { useSelector } from "react-redux";
import { useAuthContext } from "./context";
import { useAuthUser } from "./utils/common.hooks";

const Stack = createStackNavigator<RootStackParams>();

const AppRoutes = () => {
  const { Navigator, Screen } = Stack;

  const { isLoggedIn } = useAuthUser();

  const { isLoadingAuthData } = useAuthContext();
  return (
    <View style={styles.container}>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="appBottomTab"
      >
        {isLoggedIn ? (
          <>
            <Screen name="appBottomTab" component={AppBottomTab} />
            <Screen name="messagesChat" component={MessagesChat} />
            <Screen name="invitation" component={Invitation} />
            <Screen name="preview" component={Preview} />
          </>
        ) : (
          <>
            <Screen name="welcomePage" component={WelcomePage} />
            <Screen name="login" component={Login} />
            <Screen name="createAccount" component={CreateAccount} />
          </>
        )}
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
