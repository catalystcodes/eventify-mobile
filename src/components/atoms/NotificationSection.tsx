import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Toggle from "../molecules/Toggle";

const NotificationSection = ({
  text,
  subNotification,
}: {
  text: string;
  subNotification?: string;
}) => {
  return (
    <View
      style={{
        paddingBottom: heightPercentageToDP(2.7),
        borderBottomColor: "#848484",
        borderBottomWidth: 1,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          columnGap: widthPercentageToDP(15.2),
        }}
      >
        <Text style={{ fontSize: 16, width: widthPercentageToDP(64) }}>
          {text}
        </Text>
        <Toggle />
      </View>
      {subNotification && (
        <Text
          style={{
            fontSize: 12,
            marginTop: heightPercentageToDP(1),
            width: widthPercentageToDP(64),
          }}
        >
          {subNotification}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({});

export default NotificationSection;
