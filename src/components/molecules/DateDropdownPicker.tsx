import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Calendar } from "react-native-calendars";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface DateDropdownPickerProps {
  label: string;
  value: string;
  onChange: (date: string) => void;
}

const DateDropdownPicker = ({
  label,
  value,
  onChange,
}: DateDropdownPickerProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <Pressable
        style={styles.inputBox}
        onPress={() => setShowCalendar(!showCalendar)}
      >
        <View
          style={{
            paddingHorizontal: wp(3.5),
            paddingVertical: hp(1.6),
            backgroundColor: "#EEEEEE",
            borderRightWidth: 1,
            borderColor: "#ACACAC",
            borderTopLeftRadius: 6,
            borderBottomLeftRadius: 6,
          }}
        >
          <Image source={require("../../assets/CalenderIcon.png")} />
        </View>
        <Text style={styles.inputText}>{value || "DD/MM/YY"}</Text>
      </Pressable>

      {showCalendar && (
        <View style={styles.dropdownContainer}>
          <Calendar
            markedDates={{
              [value]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: "red",
              },
            }}
            onDayPress={(day) => {
              onChange(day.dateString);
              setShowCalendar(false);
            }}
            style={styles.calendar}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: hp(0.5),
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ACACAC",
    borderRadius: 6,
    width: wp(42),
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    fontSize: 14,
    color: "#ACACAC",
    paddingHorizontal: wp(3.2),
  },
  dropdownContainer: {
    position: "absolute",
    top: 75,
    zIndex: 10,
    backgroundColor: "white",
    borderRadius: 8,
    width: wp(80),
    elevation: 5,
    boxShadow: "0px 1px 3px 1px #ACACAC",
  },
  calendar: {
    borderRadius: 8,
  },
});

export default DateDropdownPicker;
