import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Props {
  initials: string;
  fullname: string;
  remark: string;
}

const GuestTemplate = ({ initials, fullname, remark }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>{initials}</Text>
      </View>
      <View>
        <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
          {fullname}
        </Text>
        <Text
          style={{
            color:
              remark === "Waiting for RSVP"
                ? "#039BE5"
                : remark === "Going"
                ? "#4CAF50"
                : "#D6111A",
            fontSize: hp(1.7),
            marginTop: hp(1),
          }}
        >
          {remark}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(5.33),
    alignItems: "center",
  },
  view: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: hp(7.3),
    width: wp(15.7),
    backgroundColor: "#FDE4E4",
    borderRadius: "100%",
  },
  text: {
    fontWeight: "semibold",
    color: "#F0534F",
    fontSize: hp(2.5),
    // paddingVertical: hp(2.1),
    // paddingHorizontal: wp(4.3),
  },
});

export default GuestTemplate;
