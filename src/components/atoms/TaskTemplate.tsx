import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from "react-native-check-box";
import { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const TaskTemplate = ({
  taskName,
  addedNote,
}: {
  taskName: string;
  addedNote: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View style={styles.container}>
      {/* <BouncyCheckbox style={{ borderRadius: 10, borderColor: "blue" }} /> */}
      <CheckBox
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        style={{}}
        checkBoxColor="#ACACAC"
      />
      <View>
        <Text
          style={{ fontSize: hp(2.2), fontWeight: "medium", marginBottom: 2 }}
        >
          {taskName}
        </Text>
        <Text style={{ fontSize: hp(1.7), color: "#848484" }}>{addedNote}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(2.7),
  },
});

export default TaskTemplate;
