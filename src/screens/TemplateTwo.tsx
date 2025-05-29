import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
  Alert,
} from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import EditIcon from "../components/atoms/vectors/EditIcon";
import AppButton from "../components/atoms/AppButton";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { EventOverviewStackParams } from "../utils/types";
import ProgressGauge from "../components/atoms/ProgressGauge";

type EventOverviewNavigationProp =
  NativeStackNavigationProp<EventOverviewStackParams>;

const TemplateTwo = ({ name, setName, image }: any) => {
  const [isEditable, setIsEditable] = useState(false);
  const navigation = useNavigation<EventOverviewNavigationProp>();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          paddingRight: wp(5.8),
          backgroundColor: "white",
        }}
      >
        <PageHeader title="1 of 5: Customize" />
      </View>
      <ProgressGauge currentPhase={1} totalPhases={5} />

      <View
        style={{
          alignItems: "center",
          marginTop: hp(4.3),
          marginBottom: hp(11.8),
          position: "relative",
        }}
      >
        <Image source={require("../assets/BigCard2.png")} />
        <Pressable
          onPress={() => setIsEditable(!isEditable)}
          style={{
            // backgroundColor: "#1976D2",
            opacity: 0.2,
            paddingVertical: hp(1.2),
            paddingHorizontal: wp(2.9),
            position: "absolute",
            right: 54,
          }}
        >
          <EditIcon />
        </Pressable>
        <TextInput
          value={name}
          onChangeText={setName}
          style={[styles.input]}
          editable={isEditable}
        />
      </View>
      <View style={{ paddingHorizontal: wp(5.3) }}>
        <AppButton
          text="Next: Event Details"
          onPress={() => {
            if (isEditable) {
              navigation.navigate("eventDetails");
            } else {
              alert("Won't you like to edit your event name first? 🤨");
            }
          }}
          backgroundColor={isEditable ? "#F0534F" : "#bfb7b6"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    position: "absolute",

    top: 70,
    fontSize: 20,
    color: "#fff",
    paddingHorizontal: widthPercentageToDP(1.6),
    paddingVertical: heightPercentageToDP(0.7),
    height: heightPercentageToDP(14),
  },
});

export default TemplateTwo;
