import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Pressable,
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

const TemplateFour = ({ name, setName, image }: any) => {
  const [isEditable, setIsEditable] = useState(false);
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
      <View
        style={{
          alignItems: "center",
          marginTop: hp(4.3),
          marginBottom: hp(11.8),
          position: "relative",
        }}
      >
        <Image source={require("../assets/BigCard4.png")} />
        <Pressable
          style={{
            backgroundColor: "#92b9e1",
            opacity: 0.8,
            paddingVertical: hp(1.2),
            paddingHorizontal: wp(2.9),
            position: "absolute",
            right: 54,
          }}
          onPress={() => setIsEditable(true)}
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
          onPress={() => {}}
          backgroundColor={isEditable ? "#F0534F" : "#bfb7b6"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    position: "absolute",
    top: 130,
    fontSize: 20,
    color: "#9DABB4",
    paddingHorizontal: widthPercentageToDP(1.6),
    paddingVertical: heightPercentageToDP(0.7),
    height: heightPercentageToDP(14),
  },
});

export default TemplateFour;
