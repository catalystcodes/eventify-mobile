import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface IRenderLabel {
  focused?: boolean;
  // route?: any;
  icon?: string;
}

const RenderLabel = ({ focused, icon }: IRenderLabel) => {
  return (
    <View>
      <Text style={[styles.label, { color: focused ? "#D35400" : "#808080" }]}>
        {icon}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 12,
    fontWeight: "400",
  },
});

export default RenderLabel;
