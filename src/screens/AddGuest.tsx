import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import ProgressGauge from "../components/atoms/ProgressGauge";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AddContact from "../components/atoms/vectors/AddContact";
import AppButton from "../components/atoms/AppButton";
import { useNavigation } from "@react-navigation/native";

const AddGuest = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
          paddingRight: wp(1.7),
        }}
      >
        <PageHeader title="4 of 5: Add Guests">
          <Pressable onPress={() => navigation.navigate("createContact")}>
            <AddContact />
          </Pressable>
        </PageHeader>
      </View>
      <ProgressGauge currentPhase={4} totalPhases={5} />
      <View style={{ backgroundColor: "red", flexGrow: 1 }}>
        <View></View>
        <View style={{ marginBottom: hp(2.5) }}>
          <AppButton text="Next: Review & Send" onPress={() => {}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddGuest;
