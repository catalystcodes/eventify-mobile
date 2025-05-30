import React from "react";
import { StyleSheet, View, Text } from "react-native";
import AppButton from "../components/atoms/AppButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import HomeSection from "../components/molecules/HomeSection";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }: any) => {
  const handlePlanEvent = () => {
    navigation.navigate("CreateEventStack");
  };

  return (
    <View style={{ marginTop: hp(4.7), paddingHorizontal: wp(5.3) }}>
      <Text
        style={{
          fontSize: hp(3),
          fontWeight: "bold",
          marginTop: hp(3.7),
          marginBottom: hp(2.5),
        }}
      >
        Hello Dylan!
      </Text>
      <View style={styles.container}>
        <View style={{ flexGrow: 1 }}>
          <Text style={styles.text}>Now that you are all set.</Text>
          <Text style={styles.text}>
            {" "}
            Let’s make your events extraordinary, starting right here!
          </Text>
        </View>
        <View style={{ width: wp(50.7) }}>
          <AppButton text="Plan an Event" onPress={handlePlanEvent} />
        </View>
      </View>
      <View>
        <View style={{ marginTop: hp(6.2) }}>
          <HomeSection
            header="Invitations"
            subHeader="No Invitations"
            content="No invitations received? Take charge and plan your own event with EventJoy. It's easy and fun!"
            image={require("../assets/InvitationIcon.png")}
          />
        </View>
        <View style={{ marginTop: hp(7.3) }}>
          <HomeSection
            header="Upcoming Events"
            subHeader="No Events"
            content="Your event calendar is a blank canvas. Use EventJoy to paint it with memorable moments."
            image={require("../assets/Calenda Icon.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: hp(21.6),
    backgroundColor: "#FEEDED",
    borderRadius: 10,
    paddingVertical: hp(2),
    paddingHorizontal: wp(4.3),
  },
  text: {
    fontSize: hp(1.7),
    width: wp(72),
    color: "#333333",
  },
});

export default Home;
