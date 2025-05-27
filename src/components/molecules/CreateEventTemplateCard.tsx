import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { EventOverviewStackParams } from "../../utils/types";
import { useNavigation } from "@react-navigation/native";

const CreateEventTemplateCard = ({
  name,
  image,
  id,
  imageBg,
}: {
  name: string;
  image: any;
  imageBg?: any;
  id: number;
}) => {
  const navigation = useNavigation<EventOverviewStackParams>();

  const handlePress = () => {
    navigation.navigate("customizeDetails", {
      templateId: id,
      name,
      image,
    });
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

const styles = StyleSheet.create({});

export default CreateEventTemplateCard;
