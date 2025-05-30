import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import ProgressGauge from "../components/atoms/ProgressGauge";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { ScrollView } from "react-native-gesture-handler";
import LocationSvg from "../components/atoms/vectors/LocationSvg";
import TimerSvg from "../components/atoms/vectors/TimerSvg";
import DateSvg from "../components/atoms/vectors/DateSvg";
import GuestTemplate from "../components/atoms/GuestTemplate";
import { guestsList } from "../constantData";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import EditIcon from "../components/atoms/vectors/EditIcon";
import GuestListCard from "../components/molecules/GuestListCard";
import AppButton from "../components/atoms/AppButton";
import { useNavigation } from "@react-navigation/native";
import { EventOverviewStackParams } from "../utils/types";

const InitialPreview = () => {
  const navigation = useNavigation<EventOverviewStackParams>();

  const GuestList = [
    {
      guestName: "Asiyanbi Abdulmuji",
      guestNumber: 1,
    },
    {
      guestName: "The Bolongo",
      guestNumber: 2,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
        }}
      >
        <PageHeader title="3 of 5: Preview" />
      </View>
      <ProgressGauge currentPhase={3} totalPhases={5} />
      <View>
        <KeyboardAvoidView>
          <View style={styles.eventDetails}>
            <View>
              <Image
                style={{
                  width: wp(91.5),
                  height: hp(63),
                  marginTop: hp(4.3),
                  position: "relative",
                }}
                source={require("../assets/Card.png")}
              />
              <Pressable
                style={{
                  backgroundColor: "#9abfe3",
                  paddingHorizontal: wp(3),
                  paddingVertical: hp(1.3),
                  width: wp(10.7),
                  opacity: 0.7,
                  position: "absolute",
                  top: hp(4.5),
                  right: wp(0),
                }}
                onPress={() => {
                  navigation.pop(2);
                }}
              >
                <EditIcon />
              </Pressable>
            </View>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-end",
                marginTop: hp(-3.5),
              }}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#9abfe3",
                  paddingHorizontal: wp(3),
                  paddingVertical: hp(1.3),
                  width: wp(10.7),
                }}
              >
                <EditIcon />
              </Pressable>
              <Text
                style={{
                  color: "#1976D2",
                  fontWeight: "medium",
                  fontSize: 14,
                  backgroundColor: "#cadef0",
                  paddingVertical: hp(1.5),
                  paddingHorizontal: wp(2.7),
                }}
              >
                Edit Details
              </Text>
            </Pressable>
            <View style={styles.eventLocation}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: hp(3),
                  width: "90%",
                  lineHeight: hp(3.5),
                }}
              >
                Family Get-Together
              </Text>
              <View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 4,
                    alignItems: "center",
                    marginBottom: hp(1.5),
                  }}
                >
                  <DateSvg />
                  <Text style={{ fontSize: hp(1.7), color: "#595959" }}>
                    Wednesday, 6 Dec 2023
                  </Text>
                </View>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 4,
                    alignItems: "center",
                  }}
                >
                  <TimerSvg />
                  <Text style={{ fontSize: hp(1.7), color: "#595959" }}>
                    11:30 am - 5:00 pm
                  </Text>
                </View>
              </View>
              <Text
                style={{ color: "#4539B4", fontSize: hp(1.7), marginLeft: 5 }}
              >
                + Add to Calendar
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 4,
                  alignItems: "flex-start",
                }}
              >
                <View style={{ marginTop: 5 }}>
                  <LocationSvg />
                </View>
                <Text
                  style={{
                    fontSize: hp(1.7),
                    lineHeight: hp(2.5),
                    color: "#595959",
                  }}
                >
                  “A5 Villa”, Kent Nalukettu, near Udhyan Auditorium, Vennala,
                  Kochi, Kerala-682028
                </Text>
              </View>
              <Image source={require("../assets/Map.png")} />
            </View>
            <View>
              <Text style={{ fontWeight: "semibold", fontSize: hp(2.25) }}>
                Hosted By
              </Text>
              <Text style={{ fontSize: hp(1.7), marginTop: hp(0.5) }}>
                Dylan Thomas
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: hp(2.3),
                  marginBottom: hp(0.5),
                }}
              >
                Event Description
              </Text>
              <Text
                style={{
                  fontSize: hp(1.7),
                  marginRight: wp(14),
                  color: "#333333",
                  fontStyle: "italic",
                  lineHeight: hp(2.4),
                }}
              >
                Join us for a joyful celebration of faith, family, and
                fellowship at our annual Parish Feast Family Get-Together! Let
                us spend quality time with each other and create new memories
                that will last a lifetime. We are excited to see you there!
              </Text>
            </View>
            <Text
              style={{
                fontWeight: "semibold",
                fontSize: hp(2.3),
                marginBottom: hp(1.2),
              }}
            >
              Guest List
            </Text>
            <View style={{ marginBottom: hp(7.1), rowGap: hp(1.3) }}>
              {GuestList.map((guest, index) => (
                <GuestListCard key={index} {...guest} />
              ))}
            </View>
            <View style={{ marginBottom: hp(2.5) }}>
              <AppButton text="Next: Add Guests" onPress={() => {}} />
            </View>
          </View>
        </KeyboardAvoidView>
      </View>
    </View>
  );
};

export default InitialPreview;

const styles = StyleSheet.create({
  container: {},
  headerView: {
    backgroundColor: "#fff",
    paddingTop: hp(4),
    // paddingBottom: hp(2),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  eventDetails: {
    marginHorizontal: wp(4.33),
    // marginVertical: hp(2.5),
    display: "flex",
    flexDirection: "column",
    rowGap: hp(4),
    marginBottom: hp(15),
  },
  eventLocation: {
    display: "flex",
    rowGap: hp(2.5),
    // flex: 1,
    flexWrap: "wrap",
  },
  guestView: {
    backgroundColor: "#fff",
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3.2),
    borderRadius: 10,
  },
  guestList: {
    marginTop: hp(2.5),
    display: "flex",
    rowGap: hp(2.5),
  },
});
