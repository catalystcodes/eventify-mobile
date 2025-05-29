import React, { useState } from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import ProgressGauge from "../components/atoms/ProgressGauge";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInput from "../components/molecules/AppInput";
import ItemDropDown from "../components/molecules/DropDownInput";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import EventTimingCard from "../components/molecules/DateDropdownPicker";
import { Calendar } from "react-native-calendars";
import EventTimingDropdown from "../components/molecules/DateDropdownPicker";
import DateDropdownPicker from "../components/molecules/DateDropdownPicker";
import TimeDropdownPicker from "../components/molecules/TimeDropdownPicker";
import Toggle from "../components/molecules/Toggle";
import AppButton from "../components/atoms/AppButton";
import { EventOverviewStackParams } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";

const EventDetails = () => {
  const [selected, setSelected] = useState("Select event type");
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [selectedEndDate, setSelectedEndDate] = useState<string>("");
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");

  const navigation = useNavigation<EventOverviewStackParams>();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
        }}
      >
        <PageHeader title="2 of 5: Event Details" />
      </View>
      <ProgressGauge currentPhase={2} totalPhases={5} />
      <KeyboardAvoidView>
        <View style={{ paddingHorizontal: wp(5.3), marginTop: hp(3.7) }}>
          <AppInput
            label="Event Title"
            placeholder="Enter event title"
            style={{
              marginBottom: hp(2.5),
              backgroundColor: "white",
            }}
          />
          <ItemDropDown
            label="Event Type"
            dropdownItems={[
              "Adventure",
              "Anniversary",
              "BBQ",
              "Baby Shower",
              "Birthday",
              "Bridal",
              "Bridal Shower",
              "Celebration",
              "Christmas",
              "Concert",
              "Dinner",
              "Festival",
              "Halloween",
              "Conference",
              "Cooking Class",
              "Dance Class",
              "Dinner Party",
              "Fair",
              "Family Reunion",
            ]}
            onSelect={setSelected}
            selectedItem={selected}
          />
          <View style={{ marginBottom: hp(2.5) }}></View>
          <AppInput
            label="Event Description"
            placeholder="Write your event description"
            style={{
              height: hp(10.8),
              paddingBottom: hp(4),
              backgroundColor: "white",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            marginTop: hp(3.7),
            marginBottom: hp(1),
            paddingHorizontal: wp(5.3),
          }}
        >
          Event Timing
        </Text>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: wp(5.3),
            justifyContent: "center",
            columnGap: wp(5.1),
          }}
        >
          <DateDropdownPicker
            label="Start Date"
            value={selectedStartDate}
            onChange={(date) => setSelectedStartDate(date)}
          />
          <TimeDropdownPicker
            label="Start Time"
            value={selectedStartTime}
            onChange={(time) => setSelectedStartTime(time)}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: wp(5.3),
            justifyContent: "center",
            columnGap: wp(5.1),
          }}
        >
          <DateDropdownPicker
            label="End Date"
            value={selectedEndDate}
            onChange={(date) => setSelectedEndDate(date)}
          />
          <TimeDropdownPicker
            label="End Time"
            value={selectedEndTime}
            onChange={(time) => setSelectedEndTime(time)}
          />
        </View>
        <View style={{ paddingHorizontal: wp(5.3) }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "medium",
              marginBottom: hp(0.5),
            }}
          >
            Location
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderRadius: 6,
              borderColor: "#ACACAC",
              borderWidth: 1,
            }}
          >
            <View
              style={{
                paddingHorizontal: wp(4.3),
                paddingVertical: hp(1.7),
                backgroundColor: "#eeeeee",
                borderTopLeftRadius: 6,
                borderBottomLeftRadius: 6,
                borderRightColor: "#ACACAC",
                borderRightWidth: 1,
              }}
            >
              <Image source={require("../assets/Location icon.png")} />
            </View>
            <TextInput
              placeholder="Location"
              style={{
                backgroundColor: "white",
                height: hp(5.2),
                width: wp(75),
                paddingHorizontal: wp(3.2),
              }}
            />
          </View>
          <View style={{ marginTop: hp(3.7) }}></View>
          <AppInput
            label="Hosted By"
            placeholder="Enter host name"
            style={{ backgroundColor: "white" }}
          />
          <View style={{ marginTop: hp(8.3) }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "medium",
                marginBottom: hp(1),
              }}
            >
              Guest Options
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                columnGap: wp(5),
                marginBottom: hp(4.8),
              }}
            >
              <Text style={{ width: wp(72) }}>
                Hide the guest list from attendees for this event
              </Text>
              <Toggle />
            </View>
            <View style={{ marginBottom: hp(3.8) }}>
              <AppButton
                text="Next: Preview"
                onPress={() => {
                  navigation.navigate("initialPreview");
                }}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "#00000088",
    justifyContent: "center",
    alignItems: "center",
  },
  calendarView: {
    marginVertical: 30,
    marginHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
  },
  calendar: {
    borderRadius: 10,
  },
  closeText: {
    color: "blue",
    marginTop: 10,
    textAlign: "center",
  },
});

export default EventDetails;
