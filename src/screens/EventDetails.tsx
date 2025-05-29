import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
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

const EventDetails = () => {
  const [selected, setSelected] = useState("Select event type");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleDatePress = () => setShowDatePicker(true);
  const handleTimePress = () => setShowTimePicker(true);

  const formatTime = (date: Date) =>
    date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

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
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <TimeDropdownPicker
            label="Start Time"
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
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
            label="Start Date"
            value={selectedDate}
            onChange={(date) => setSelectedDate(date)}
          />
          <TimeDropdownPicker
            label="Start Time"
            value={selectedTime}
            onChange={(time) => setSelectedTime(time)}
          />
        </View>
        <View style={{ paddingHorizontal: wp(5.3) }}>
          <AppInput label="Hosted By" placeholder="Enter host name" />
          <View>
            <Text></Text>
            <View>
              <Text></Text>
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
