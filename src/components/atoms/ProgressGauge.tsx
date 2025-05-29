import React from "react";
import { StyleSheet, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface ProgressGaugeProps {
  currentPhase: number;
  totalPhases?: number;
}

const ProgressGauge: React.FC<ProgressGaugeProps> = ({
  currentPhase,
  totalPhases = 5,
}) => {
  const progressWidth = (currentPhase / totalPhases) * 100;

  return (
    <View style={styles.container}>
      <View style={[styles.progress, { width: wp(`${progressWidth}%`) }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp("100%"),
    height: hp("0.4%"),
    backgroundColor: "#D9D9D9",
  },
  progress: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});

export default ProgressGauge;
