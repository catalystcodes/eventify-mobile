import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/AppButton";
import SmallLocation from "../components/atoms/vectors/smallLocation";
import TimeIcon from "../components/atoms/vectors/TimeIcon";

const CreateEventDone = () => {
  return (
    <View>
      <View style={{ height: hp(4.7), backgroundColor: "white" }}></View>
      <Text
        style={{
          marginTop: hp(7.4),
          marginBottom: hp(1),
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        All set for a memorable event!
      </Text>
      <Text style={{ textAlign: "center", fontSize: 14, marginBottom: hp(5) }}>
        Your invitation has been sent to the guests.
      </Text>
      <View
        style={{
          backgroundColor: "white",
          marginHorizontal: wp(5.3),
          paddingVertical: hp(1.2),
          paddingHorizontal: wp(3),
          flexDirection: "row",
          alignItems: "center",
          columnGap: wp(4.3),
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: hp(3.2),
        }}
      >
        <Image
          source={require("../assets/Card.png")}
          style={{ width: wp(27.2), height: hp(15.8) }}
        />
        <View>
          <Text
            style={{ color: "#595959", fontSize: 14, marginBottom: hp(0.4) }}
          >
            Wednesday, 6 Dec 2023
          </Text>
          <Text
            style={{
              fontSize: 20,
              marginBottom: hp(0.9),
              fontWeight: "600",
              width: wp(43),
            }}
          >
            Family Get-Together
          </Text>
          <View
            style={{
              flexDirection: "row",
              columnGap: wp(1.2),
              alignItems: "center",
              marginBottom: hp(0.6),
            }}
          >
            <TimeIcon />
            <Text>11:30 am - 5:00 pm</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              columnGap: wp(2.5),
              alignItems: "center",
            }}
          >
            <SmallLocation />
            <Text>A5 Villa, Kochi</Text>
          </View>
        </View>
      </View>
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <AppButton text="See Event Overview" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventDone;
