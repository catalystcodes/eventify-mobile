import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowBack from "./vectors/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const PageHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingHorizontal: wp(3.2) }}>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowBack />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PageHeader;
