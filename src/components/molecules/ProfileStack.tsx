import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ProfileStackParams } from "../../utils/types";
import Profile from "../../screens/Profile";
import EditProfile from "../../screens/EditProfile";
import Notifications from "../../screens/Notifications";
import FAQ from "../../screens/FAQ";
import ContactUs from "../../screens/ContactUs";

const Stack = createStackNavigator<ProfileStackParams>();

const ProfileStack = () => {
  const { Navigator, Screen } = Stack;
  return (
    <View style={{ flex: 1 }}>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="profile" component={Profile} />
        <Screen name="editProfile" component={EditProfile} />
        <Screen name="notification" component={Notifications} />
        <Screen name="faq" component={FAQ} />
        <Screen name="contactUs" component={ContactUs} />
      </Navigator>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProfileStack;
