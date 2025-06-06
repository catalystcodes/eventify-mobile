import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import PageHeader from "../atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import LocationSvg from "../atoms/vectors/LocationSvg";
import DateSvg from "../atoms/vectors/DateSvg";
import TimerSvg from "../atoms/vectors/TimerSvg";
import { ScrollView } from "react-native-gesture-handler";
import GuestTemplate from "../atoms/GuestTemplate";
import { guestsList } from "../../constantData";
import ModalClose from "../atoms/vectors/ModalClose";

interface Props {
  title: string;
  showPageHeader?: boolean;
}

const Invitation_Preview = ({ title, showPageHeader = true }: Props) => {
  return (
    <View>
      <View style={styles.headerView}>
        {/* <PageHeader /> */}
        {showPageHeader && (
          <PageHeader>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                width: "90%",
              }}
            >
              <Text
                style={{
                  width: "85%",
                  fontSize: hp(3),
                  fontWeight: "bold",
                  textAlign: "center",
                  // marginBottom:,
                }}
              >
                {title}
              </Text>
            </View>
          </PageHeader>
        )}
      </View>
      <ScrollView bounces={false} style={{}}>
        <View style={styles.eventDetails}>
          <Image
            style={{ width: wp(91.5), height: hp(63) }}
            source={require("../../assets/Card.png")}
          />
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
            <Image source={require("../../assets/Map.png")} />
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
              Join us for a joyful celebration of faith, family, and fellowship
              at our annual Parish Feast Family Get-Together! Let us spend
              quality time with each other and create new memories that will
              last a lifetime. We are excited to see you there!
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: "semibold",
                fontSize: hp(2.3),
                marginBottom: hp(1.2),
              }}
            >
              Guest List
            </Text>
            <View style={styles.guestView}>
              <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
                {guestsList.length} Guests
              </Text>
              <View style={styles.guestList}>
                {guestsList.map((guest, ind) => (
                  <GuestTemplate {...guest} key={ind} />
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  headerView: {
    backgroundColor: "#fff",
    paddingTop: hp(4),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  eventDetails: {
    marginHorizontal: wp(4.33),
    paddingTop: hp(2.4),
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
export default Invitation_Preview;
