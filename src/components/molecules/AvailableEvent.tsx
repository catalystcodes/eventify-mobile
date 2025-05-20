import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  ImageRequireSource,
  Image,
} from "react-native";
import React from "react";
import LocationSvg from "../atoms/vectors/LocationSvg";
import TimerSvg from "../atoms/vectors/TimerSvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const AvailableEvent = ({ img }: { img: ImageSourcePropType }) => {
  return (
    <View style={styles.availableEvent}>
      <Image source={img} />
      <View style={styles.eventDetails}>
        <Text style={{ color: "#595959", fontSize: hp(1.72) }}>
          Wednesday, 6 Dec 2023
        </Text>
        <Text
          style={{
            fontWeight: "semibold",
            fontSize: hp(2.7),
            width: "90%",
            lineHeight: hp(3.5),
          }}
        >
          Family Get-Together
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 4,
            alignItems: "center",
          }}
        >
          <TimerSvg />
          <Text style={{ fontSize: hp(1.5) }}>11:30 am - 5:00 pm</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            columnGap: 4,
            alignItems: "center",
          }}
        >
          <LocationSvg />
          <Text style={{ fontSize: hp(1.5) }}>A5 Villa, Kochi </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  availableEvent: {
    marginHorizontal: wp(1),
    marginTop: hp(2.5),
    width: "100%",
    backgroundColor: "#fff",
    boxShadow: "0 0 4px 0 #1D1D1D12 ",
    paddingHorizontal: wp(3.2),
    paddingVertical: hp(1.5),
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    columnGap: wp(4.27),
    flexWrap: "wrap",
  },
  eventDetails: {
    display: "flex",
    rowGap: hp(0.65),
  },
});

export default AvailableEvent;
