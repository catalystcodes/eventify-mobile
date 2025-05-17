import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

const OrSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        columnGap: widthPercentageToDP(2.7),
        justifyContent: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#1D1D1D",
          width: widthPercentageToDP(30.7),
          height: 1,
        }}
      ></View>
      <Text style={{ fontSize: 12, fontWeight: "light" }}>OR</Text>
      <View
        style={{
          backgroundColor: "#1D1D1D",
          width: widthPercentageToDP(30.7),
          height: 1,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default OrSection;
