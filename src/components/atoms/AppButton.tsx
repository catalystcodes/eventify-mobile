import React from "react";
import { Pressable, StyleSheet, Text, View, TextStyle } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PreviewIcon from "./vectors/PreviewIcon";

interface AppButtonProps {
  text: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  onPress: () => void;
  icon?: React.ReactElement;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  previewIcon?: boolean;
}

const AppButton = ({
  text,
  backgroundColor = "#F0534F",
  borderColor = "transparent",
  textColor = "white",
  onPress,
  icon,
  fontSize = wp(4.3),
  fontWeight = "medium",
  previewIcon = false,
}: AppButtonProps) => {
  return (
    <Pressable
      style={[styles.container, { backgroundColor, borderColor }]}
      onPress={onPress}
    >
      <View style={styles.content}>
        {previewIcon && (
          <Pressable style={{ marginRight: wp(2.6) }}>
            <PreviewIcon />
          </Pressable>
        )}
        {icon && <View style={styles.iconWrapper}>{icon}</View>}
        <Text style={[styles.text, { color: textColor, fontSize, fontWeight }]}>
          {text}
        </Text>
      </View>
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
  content: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    marginRight: wp(2),
  },
  text: {
    color: "white",
  },
});

export default AppButton;
