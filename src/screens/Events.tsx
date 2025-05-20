import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import HomeSection from "../components/molecules/HomeSection";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import TimerSvg from "../components/atoms/vectors/TimerSvg";
import LocationSvg from "../components/atoms/vectors/LocationSvg";
import AvailableEvent from "../components/molecules/AvailableEvent";

const Events = () => {
  const [selected, setSelected] = useState<number>(new Date().getMonth() + 1);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Events</Text>
      <View style={styles.calendarView}>
        <Calendar
          style={styles.calendar}
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
          <View>
            <Text style={{ fontSize: hp(2.5), fontWeight: "semibold" }}>
              This month
            </Text>
            <AvailableEvent img={require("../assets/Image (2).png")} />
          </View>
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
