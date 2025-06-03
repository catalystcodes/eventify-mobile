import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import TimerSvg from "../components/atoms/vectors/TimerSvg";
import LocationSvg from "../components/atoms/vectors/LocationSvg";
import DateSvg from "../components/atoms/vectors/DateSvg";
import AppButton from "../components/atoms/AppButton";
import EventMoreOptionSvg from "../components/atoms/vectors/EventMoreOptionSvg";
import EventOverviewOptions from "../components/atoms/EventOverviewOptions";
import { ScrollView } from "react-native-gesture-handler";

import EventOptionsModal from "../components/molecules/EventOptionsModal";
import CalendarSvg from "../components/atoms/vectors/CalendarSvg";
import BinSvg from "../components/atoms/vectors/BinSvg";

const EventOverview = ({ navigation }: any) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalPress = () => {
    setShowModal(!showModal);
  };
  const handleInvitationBtn = () => {
    navigation.navigate("invitation");
  };

  const eventOptions = [
    {
      Icon: CalendarSvg,
      text: "Add to Calendar",
    },
    {
      Icon: BinSvg,
      text: "Cancel Event",
    },
  ];

  return (
    <View>
      <Text style={styles.headerText}>Event Overview</Text>

      <ScrollView style={{ marginBottom: hp(7.4) }} bounces={false}>
        <View>
          <View style={styles.eventDetails}>
            <Image
              style={{ width: wp(38), height: hp(22.5) }}
              source={require("../assets/Image (2).png")}
            />
            <View style={styles.eventLocation}>
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: hp(2.8),
                  width: "90%",
                  lineHeight: hp(3.5),
                  marginBottom: hp(1),
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
                <DateSvg />
                <Text style={{ fontSize: hp(1.65), color: "#595959" }}>
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
                <Text style={{ fontSize: hp(1.65), color: "#595959" }}>
                  11:30 am - 5:00 pm
                </Text>
              </View>
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
                    fontSize: hp(1.65),
                    width: "90%",
                    lineHeight: hp(2.5),
                    color: "#595959",
                  }}
                >
                  “A5 Villa”, Kent Nalukettu, near Udhyan Auditorium, Vennala,
                  Kochi, Kerala-682028{" "}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.showMoreView}>
            <View style={{ flex: 1 }}>
              <AppButton
                onPress={handleInvitationBtn}
                text="View Invitation"
                backgroundColor="#F0534F"
                textColor="#FFFFFF"
              />
            </View>

            <EventMoreOptionSvg onPress={handleModalPress} />
          </View>
        </View>
        <View style={styles.eventOptions}>
          <EventOverviewOptions
            handlePress={() => navigation.navigate("guest_list")}
            text="Guest List"
            image={require("../assets/icon (1).png")}
          />
          <EventOverviewOptions
            handlePress={() => navigation.navigate("task_list")}
            text="Task List"
            image={require("../assets/icon (2).png")}
          />
          <EventOverviewOptions
            handlePress={() => navigation.navigate("budget")}
            text="Budget"
            image={require("../assets/image 22.png")}
          />
        </View>
        <Text
          style={{
            marginTop: hp(7.4),
            marginBottom: hp(10),
            marginLeft: wp(5.33),
            fontWeight: "semibold",
            fontSize: hp(2.46),
            color: "#F0534F",
          }}
          onPress={() =>
            navigation.navigate("ProfileStack", { screen: "feedback" })
          }
        >
          Post a Review
        </Text>
      </ScrollView>
      <EventOptionsModal
        showModal={showModal}
        handleModalPress={handleModalPress}
        header="EVENT OPTIONS"
        data={eventOptions}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerText: {
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: hp(3),
    fontWeight: "bold",
    paddingLeft: wp(5.33),
    paddingBottom: hp(2),
    paddingTop: hp(6.52),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  eventDetails: {
    marginHorizontal: wp(4.26),
    marginVertical: hp(2.5),
    display: "flex",
    flexDirection: "row",
    columnGap: wp(4.26),
  },
  eventLocation: {
    display: "flex",
    rowGap: hp(1.5),
    flex: 1,
    flexWrap: "wrap",
  },
  showMoreView: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(3.2),
    marginHorizontal: wp(6.7),
    alignItems: "center",
  },
  eventOptions: {
    marginTop: hp(6.2),
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    columnGap: wp(5.33),
    rowGap: hp(2.5),
  },
});

export default EventOverview;
