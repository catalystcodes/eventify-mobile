import { View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const PaymentTemplate = ({
  name,
  amount,
  date,
  isChecked,
  handleChecked,
}: {
  name: string;
  amount: string;
  date: string;
  isChecked: boolean;
  handleChecked: () => void;
}) => {
  return (
    <View
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <CheckBox
          isChecked={isChecked}
          onClick={handleChecked}
          uncheckedCheckBoxColor="#ACACAC"
          checkedCheckBoxColor="#4CAF50"
        />
        <View style={{ display: "flex", rowGap: hp(0.2), marginLeft: hp(1.5) }}>
          <Text style={{ fontWeight: "medium", fontSize: hp(2.3) }}>
            {name}
          </Text>
          <Text style={{ color: "#848484", fontSize: hp(1.7) }}>{date}</Text>
        </View>
      </View>
      <Text style={{ fontSize: hp(2), fontWeight: "medium" }}>${amount}</Text>
    </View>
  );
};

export default PaymentTemplate;
