import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface AppButtonProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  onPress: () => void;
}

const AppButton = ({
  text,
  backgroundColor = "#F0534F",
  borderColor = "transparent",
  textColor = "white",
  onPress,
}: AppButtonProps) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor, borderColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: wp(3.5),
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});

export default AppButton;
