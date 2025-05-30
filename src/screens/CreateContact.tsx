import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CloseButton from "../components/atoms/vectors/CloseButton";
import AddContact from "../components/atoms/vectors/AddContact";
import { useNavigation } from "@react-navigation/native";
import AppInput from "../components/molecules/AppInput";
import AppButton from "../components/atoms/AppButton";

const CreateContact = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
        }}
      >
        <PageHeader
          showAddCContactButton={true}
          title="Create Contact"
          showBackButton={false}
        >
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ paddingRight: wp(5.1) }}
          >
            <CloseButton />
          </Pressable>
        </PageHeader>
      </View>
      <View
        style={{
          marginTop: hp(4.1),
          rowGap: hp(3.2),
          paddingHorizontal: wp(5.3),
          flex: 1,
        }}
      >
        <AppInput
          label="Name"
          placeholder="Enter name"
          style={{ backgroundColor: "white" }}
        />
        <AppInput
          label="E-mail Address"
          placeholder="Enter e-mail address"
          style={{ backgroundColor: "white" }}
        />
        <AppInput
          label="Phone (optional)"
          placeholder="Enter phone"
          style={{ backgroundColor: "white" }}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={{ width: wp(43.2) }}>
          <AppButton
            text="Cancel"
            backgroundColor="white"
            borderColor="#F0534F"
            textColor="#F0534F"
            onPress={() => {}}
          />
        </View>
        <View style={{ width: wp(43.2) }}>
          <AppButton text="Save" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(3),
    marginBottom: hp(2.5),
  },
});

export default CreateContact;
