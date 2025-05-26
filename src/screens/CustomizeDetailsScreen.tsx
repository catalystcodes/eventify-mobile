import React from "react";
import { StyleSheet, View, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PageHeader from "../components/atoms/PageHeader";

const CustomizeDetailsScreen = ({ route }: any) => {
  const { templateId } = route.params;
  return (
    <View>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
        }}
      >
        <PageHeader title="1 of 5: Customize" />
      </View>
      <Text>Customize Event for Template ID: {templateId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CustomizeDetailsScreen;
