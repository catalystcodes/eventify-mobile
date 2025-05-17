import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { messages } from "../constantData";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Messages = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Messages</Text>
      <View style={styles.messageView}>
        {messages.map((data, key) => (
          <Pressable key={key} style={styles.messageBtn}>
            <Image style={{ width: 60, height: 60 }} source={data.img} />
            <View style={{ display: "flex", rowGap: hp(1) }}>
              <Text style={{ fontSize: 20, fontWeight: 600 }}>
                {data.group}
              </Text>
              <Text style={{ fontSize: 14, color: "#848484" }}>
                {data.message}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
    // paddingTop: hp(6.52),
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: wp(5.33),
    paddingBottom: hp(2),
    paddingTop: hp(6.52),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  messageView: {
    marginBottom: hp(2),
    display: "flex",
    flexDirection: "column",
    rowGap: hp(1),
    // borderBottomWidth: 1,
    // borderBottomColor: "#84848440",
  },
  messageBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4.26),
    paddingLeft: wp(5.33),
    paddingVertical: hp(1.85),
    backgroundColor: "#84848418",
    borderBottomWidth: 1,
    borderBottomColor: "#84848440",
    // boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
});

export default Messages;
