import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CreateEventTemplateSection from "../components/molecules/CreateEventTemplateSection";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const CreateEvent = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
        }}
      >
        <PageHeader title="1 of 5: Customize" />
      </View>
      <KeyboardAvoidView>
        <CreateEventTemplateSection />
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEvent;
