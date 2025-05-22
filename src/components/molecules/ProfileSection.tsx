import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowRight from "../atoms/vectors/ArrowRight";
import { heightPercentageToDP } from "react-native-responsive-screen";

interface ProfileSectionProps {
  text: string;
  onPress?: () => void;
}

const ProfileSection = ({ text, onPress }: ProfileSectionProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={{ fontSize: heightPercentageToDP(1.9), fontWeight: "500" }}>
        {text}
      </Text>
      <ArrowRight />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: heightPercentageToDP(2.4),
    paddingBottom: heightPercentageToDP(2.6),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#848484",
  },
});

export default ProfileSection;
