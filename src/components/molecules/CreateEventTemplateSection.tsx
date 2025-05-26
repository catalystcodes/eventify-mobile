import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { createEventTemplate } from "../../constantData";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { EventOverviewStackParams } from "../../utils/types";

const CreateEventTemplateCard = ({
  name,
  image,
  id,
}: {
  name: string;
  image: any;
  id: number;
}) => {
  const navigation = useNavigation<EventOverviewStackParams>();

  const handlePress = () => {
    navigation.navigate("customizeDetails", { templateId: id });
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        width: widthPercentageToDP(41.1),
        rowGap: heightPercentageToDP(1.1),
      }}
    >
      <Image source={image} />
      <Text
        style={{
          paddingHorizontal: widthPercentageToDP(1.3),
          fontSize: 16,
          fontWeight: "medium",
        }}
      >
        {name}
      </Text>
    </Pressable>
  );
};

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
          <CreateEventTemplateCard {...item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CreateEventTemplateSection;
