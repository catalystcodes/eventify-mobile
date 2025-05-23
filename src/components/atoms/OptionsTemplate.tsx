import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function OptionsTemplate({
  text,
  Icon,
}: {
  text: string;
  Icon: any;
}) {
  return (
    <Pressable style={styles.options}>
      <Icon />
      <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>{text}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: hp(2.2),
    marginLeft: wp(1.6),
  },
});
