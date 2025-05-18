import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowBack from "./vectors/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PageHeader = ({ children }: { children?: React.ReactNode }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: wp(3.2),
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowBack />
      </Pressable>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({});

export default PageHeader;
