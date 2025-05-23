import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MoreOptionsSvg from "./vectors/MoreOptionsSvg";

interface Props {
  fullname: string;
  email: string;
  people: string;
}

const GuestListTemplate = ({ fullname, email, people }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
          {fullname}
        </Text>
        <Text
          style={{ color: "#848484", fontSize: hp(1.7), marginTop: hp(0.5) }}
        >
          {email}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <MoreOptionsSvg style={{ marginTop: hp(1) }} onPress={() => {}} />
        <Text
          style={{
            color:
              people === "No"
                ? "#D6111A"
                : people === "Not Yet Replied"
                ? "#039BE5"
                : "#4CAF50",
            fontSize: hp(2),
            fontWeight: "medium",
            marginTop: hp(0.1),
          }}
        >
          {people}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: hp(2.5),
    borderBottomWidth: 1,
    borderBottomColor: "#84848430",
  },
});

export default GuestListTemplate;
