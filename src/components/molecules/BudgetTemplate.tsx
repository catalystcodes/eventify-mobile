import { View, Text } from "react-native";
import React, { useState } from "react";
import CheckBox from "react-native-check-box";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const BudgetTemplate = ({
  name,
  amountPaid,
  amountPending,
  estimatedAmount,
}: {
  name: string;
  note?: string;
  estimatedAmount: string;
  amountPaid: string;
  amountPending: string;
}) => {
  const [isChecked, setIsChecked] = useState(false);

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
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <CheckBox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          uncheckedCheckBoxColor="#ACACAC"
          checkedCheckBoxColor="#4CAF50"
        />
        <View
          style={{
            display: "flex",
            rowGap: hp(0.2),
            marginLeft: hp(1.5),
          }}
        >
          <Text style={{ fontWeight: "medium", fontSize: hp(2.3) }}>
            {name}
          </Text>
          <Text style={{ color: "#848484", fontSize: hp(1.7) }}>
            ${estimatedAmount}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          rowGap: hp(0.4),
          alignItems: "flex-end",
          marginTop: 5,
          //   justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: hp(1.7), color: "#4CAF50" }}>
          paid:${amountPaid}
        </Text>
        <Text style={{ fontSize: hp(1.7), color: "#D6111A" }}>
          Pending:${amountPending}
        </Text>
      </View>
    </View>
  );
};

export default BudgetTemplate;
