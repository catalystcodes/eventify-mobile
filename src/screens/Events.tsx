import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import HomeSection from "../components/molecules/HomeSection";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Calendar } from "react-native-calendars";
import AvailableEvent from "../components/molecules/AvailableEvent";

const Events = ({ navigation }: any) => {
  const [selected, setSelected] = useState<number>(new Date().getMonth() + 1);
  const [fullDate, setFullDate] = useState<string>("");
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Events</Text>
      <View style={styles.calendarView}>
        <Calendar
          style={styles.calendar}
          markedDates={{
            [fullDate]: {
              selected: true,
              disableTouchEvent: true,
              selectedColor: "red",
            },
          }}
          onDayPress={(current) => setFullDate(current.dateString)}
          onMonthChange={(current) => setSelected(current.month)}
        />
      </View>
      <View style={{ paddingHorizontal: wp(6) }}>
        {selected % 2 > 0 ? (
          <HomeSection
            header="This month"
            subHeader="No Events"
            content="Create an event and make some memories."
            image={require("../assets/Calenda Icon.png")}
          />
        ) : (
          <Pressable onPress={() => navigation.navigate("eventOverview")}>
            <Text style={{ fontSize: hp(2.5), fontWeight: "semibold" }}>
              This month
            </Text>
            <AvailableEvent img={require("../assets/Image (2).png")} />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  headerText: {
    backgroundColor: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    paddingLeft: wp(5.33),
    paddingBottom: hp(2),
    paddingTop: hp(6.52),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  calendarView: {
    marginVertical: hp(3.7),
    marginHorizontal: wp(7),
  },
  calendar: {
    borderRadius: 10,
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
});

export default Events;
