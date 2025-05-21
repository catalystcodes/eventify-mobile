import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface OverviewProp {
  image: ImageSourcePropType;
  text: string;
  handlePress: () => void;
}

const EventOverviewOptions = ({ image, text, handlePress }: OverviewProp) => {
  return (
    <Pressable style={styles.container} onPress={handlePress}>
      <Image source={image} />
      <Text style={{ color: "#F0534F", fontWeight: "medium", fontSize: hp(2) }}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: wp(9.6),
    paddingVertical: hp(1.85),
    display: "flex",
    rowGap: hp(1),
    alignItems: "center",
    borderRadius: 8,
  },
});

export default EventOverviewOptions;
