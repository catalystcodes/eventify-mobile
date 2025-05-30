import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const GuestListCard = ({
  guestName,
  guestNumber,
}: {
  guestName: string;
  guestNumber: number;
}) => {
  return (
    <View
      style={{
        paddingVertical: heightPercentageToDP(1.7),
        paddingHorizontal: widthPercentageToDP(3.7),
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 8,
        flexDirection: "row",
      }}
    >
      <Text style={{ fontWeight: "medium", fontSize: 16 }}> {guestName}</Text>
      <Text style={{ color: "#4CAF50", fontWeight: "medium", fontSize: 16 }}>
        {guestNumber} {guestNumber > 1 ? "Guests" : "Guest"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default GuestListCard;
