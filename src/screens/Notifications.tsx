import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import NotificationSection from "../components/atoms/NotificationSection";

const Notifications = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <View
        style={{
          marginTop: hp(4.7),
          paddingVertical: hp(2),
          paddingHorizontal: wp(5.8),
          backgroundColor: "white",
          boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        <PageHeader title="Notifications" />
      </View>
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <View style={{ marginTop: hp(4.9) }}>
          <NotificationSection text="Receive notification when guests RSVP to the event" />
        </View>
        <View style={{ marginTop: hp(2.7) }}>
          <NotificationSection
            text="Receive notification for activity that involves me"
            subNotification="When a guest replies to me, mentions or tags me"
          />
        </View>
        <View style={{ marginTop: hp(2.7) }}>
          <NotificationSection text="Receive notification about approaching deadlines for tasks" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Notifications;
