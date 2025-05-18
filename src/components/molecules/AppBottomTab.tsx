import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Events from "../../screens/Events";
import CreateEvent from "../../screens/CreateEvent";
import Messages from "../../screens/Messages";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import RenderAppIconBottomTab from "./RenderAppIconBottomTab";
import RenderLabel from "../atoms/RenderLabel";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

const AppBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          paddingTop: hp(1.2),
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                width: wp(20),
                rowGap: hp(0.4),
              }}
            >
              <RenderAppIconBottomTab name="Home" focused={focused} />
              <RenderLabel icon="Home" focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", width: wp(20), rowGap: hp(0.4) }}
            >
              <RenderAppIconBottomTab name="Events" focused={focused} />
              <RenderLabel icon="Events" focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Create Event"
        component={CreateEvent}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", width: wp(20), rowGap: hp(0.4) }}
            >
              <RenderAppIconBottomTab name="Create Event" focused={focused} />
              <RenderLabel icon="Create Event" focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                width: wp(20),
                rowGap: hp(0.4),
              }}
            >
              <RenderAppIconBottomTab name="Messages" focused={focused} />
              <RenderLabel icon="Messages" focused={focused} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{ alignItems: "center", width: wp(20), rowGap: hp(0.4) }}
            >
              <RenderAppIconBottomTab name="Profile" focused={focused} />
              <RenderLabel icon="Profile" focused={focused} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({});

export default AppBottomTab;
