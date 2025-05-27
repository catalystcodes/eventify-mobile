import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { createEventTemplate } from "../../constantData";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import CreateEventTemplateCard from "./CreateEventTemplateCard";

const CreateEventTemplateSection = () => {
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "semibold",
          marginTop: heightPercentageToDP(3),
          marginBottom: heightPercentageToDP(4),
          paddingHorizontal: widthPercentageToDP(5.9),
        }}
      >
        Choose one template
      </Text>
      <View
        style={{
          flexWrap: "wrap",
          flexDirection: "row",
          columnGap: widthPercentageToDP(4.3),
          rowGap: heightPercentageToDP(3.7),
          justifyContent: "center",
          paddingBottom: heightPercentageToDP(2),
        }}
      >
        {createEventTemplate.map((item, index) => (
          <CreateEventTemplateCard {...item} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventTemplateSection;
