import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PageHeader from "../components/atoms/PageHeader";
import ArrowBack from "../components/atoms/vectors/ArrowBack";
import { ScrollView } from "react-native-gesture-handler";
import AppInput from "../components/molecules/AppInput";
import App from "../../App";
import AppButton from "../components/atoms/AppButton";
import PlusIcon from "../components/atoms/vectors/PlusIcon";
import ArrowDownSvg from "../components/atoms/vectors/ArrowDownSvg";

type RenderProp = "Budget" | "addBudget" | "addPayment";

interface BudgetListProp {
  name: string;
  note?: string;
  estimatedAmount: string;
  amountPaid: string;
  amountPending: string;
}

const Budget = () => {
  const [contentRender, setContentRender] = useState<RenderProp>("Budget");
  const [budgetList, setBudgetList] = useState<BudgetListProp[]>([]);
  const [payment, setPayment] = useState([]);

  return (
    <View>
      <View style={styles.headerView}>
        {contentRender === "Budget" && (
          <PageHeader>
            <View
              style={{
                marginLeft: wp(7),
              }}
            >
              <Text style={{ fontSize: hp(2.5), fontWeight: "bold" }}>
                Budget
              </Text>
            </View>
          </PageHeader>
        )}
        {contentRender === "addBudget" && (
          <View style={styles.budgetChanges}>
            <ArrowBack onPress={() => setContentRender("Budget")} />
            <Text style={{ fontWeight: "bold", fontSize: hp(3) }}>
              Add Budget
            </Text>
          </View>
        )}
        {contentRender === "addPayment" && (
          <View style={styles.budgetChanges}>
            <ArrowBack onPress={() => setContentRender("addBudget")} />
            <Text style={{ fontWeight: "bold", fontSize: hp(3) }}>
              Add Payment
            </Text>
          </View>
        )}
      </View>
      <ScrollView bounces={false} style={{ marginBottom: hp(10) }}>
        <View style={{ marginVertical: hp(3.7), marginHorizontal: wp(5.33) }}>
          {contentRender === "Budget" && (
            <View>
              {budgetList.length && (
                <View>
                  <Text></Text>
                </View>
              )}
              <Text
                onPress={() => setContentRender("addBudget")}
                style={{
                  fontWeight: "medium",
                  color: "#F0534F",
                  fontSize: hp(2.2),
                }}
              >
                + Add Budget
              </Text>
              {!budgetList.length && (
                <View style={styles.noBudgetView}>
                  <Image
                    style={{ height: hp(10), width: wp(18) }}
                    source={require("../assets/image 19.png")}
                  />
                  <View>
                    <Text
                      style={{
                        textAlign: "center",
                        marginBottom: hp(0.5),
                        fontWeight: "medium",
                        fontSize: hp(2),
                      }}
                    >
                      No Budget found
                    </Text>
                    <Text
                      style={{
                        textAlign: "center",
                        fontSize: hp(1.7),
                        color: "#848484",
                      }}
                    >
                      Please add your budgets
                    </Text>
                  </View>
                </View>
              )}
            </View>
          )}
          {contentRender === "addBudget" && (
            <View>
              <Text style={{ fontWeight: "semibold", fontSize: hp(2.2) }}>
                Budget Details
              </Text>
              <View style={styles.addBudgetView}>
                <AppInput
                  label="Name"
                  placeholder="Enter Name"
                  style={styles.input}
                />
                <AppInput
                  label="Note"
                  placeholder="Enter Note"
                  style={styles.input}
                />
                <AppInput
                  label="Estimated Amount"
                  placeholder="Enter estimated amount"
                  style={styles.input}
                />
                <View style={styles.balanceView}>
                  <Text style={{ fontSize: hp(1.7) }}>Balance</Text>
                  <ArrowDownSvg height={10} width={15} />
                </View>
              </View>
              <View style={styles.paymentView}>
                <View
                  style={{
                    marginBottom: hp(2.7),
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontWeight: "semibold", fontSize: hp(2.2) }}>
                    Payments
                  </Text>
                  <PlusIcon onPress={() => setContentRender("addPayment")} />
                </View>
                <View
                  style={[
                    styles.payment,
                    !payment.length
                      ? {
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : "",
                  ]}
                >
                  <Text style={{ color: "#ACACAC", fontSize: hp(1.7) }}>
                    No payment found
                  </Text>
                </View>
              </View>
              <View style={styles.buttonView}>
                <AppButton onPress={() => {}} text="Add to Budget" />
              </View>
            </View>
          )}
          {contentRender === "addPayment" && (
            <View>
              <Text></Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    paddingTop: hp(4),
    paddingBottom: hp(1),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
    backgroundColor: "#fff",
  },
  budgetChanges: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(7),
    alignItems: "center",
    marginLeft: wp(5.9),
    marginVertical: hp(2),
  },
  // budgetListView: {
  //   marginBottom: hp(2.5),
  //   display: "flex",
  //   rowGap: hp(2.5),
  // },
  noBudgetView: {
    marginTop: hp(25),
    width: "100%",
    display: "flex",
    alignItems: "center",
    rowGap: hp(3),
  },
  addBudgetView: {
    marginTop: hp(2.5),
    display: "flex",
    rowGap: hp(1.2),
  },
  input: {
    fontSize: hp(1.7),
    paddingLeft: wp(4.26),
    borderColor: "#82828270",
    backgroundColor: "#fff",
  },
  balanceView: {
    height: hp(6),
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#82828270",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4.3),
  },
  paymentView: {
    marginTop: hp(4.3),
  },
  buttonView: {
    marginTop: hp(14.4),
    marginBottom: hp(2.5),
  },
  payment: {
    height: hp(17),
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#82828270",
    borderWidth: 1,
  },
});

export default Budget;
