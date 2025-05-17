import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
interface HomeSectionProps {
  header: string;
  image: any;
  subHeader: string;
  content: string;
}

const HomeSection = ({
  header,
  image,
  subHeader,
  content,
}: HomeSectionProps) => {
  return (
    <View>
      <Text
        style={{
          fontSize: hp(2.5),
          fontWeight: "semibold",
          marginBottom: hp(3.7),
        }}
      >
        {header}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          columnGap: wp(7.2),
        }}
      >
        <Image source={image} />
        <View>
          <Text
            style={{
              fontSize: hp(1.9),
              fontWeight: "medium",
              marginBottom: hp(0.5),
            }}
          >
            {subHeader}
          </Text>
          <Text
            style={{
              fontSize: hp(1.5),
              fontWeight: "light",
              width: wp(50),
            }}
          >
            {content}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeSection;
