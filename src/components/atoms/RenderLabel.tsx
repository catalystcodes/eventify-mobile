import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

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
    fontSize: 11,
    fontWeight: "regular",
  },
});

export default RenderLabel;
