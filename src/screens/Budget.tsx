import {
  View,
  Text,
  StyleSheet,
  Image,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PageHeader from "../components/atoms/PageHeader";
import ArrowBack from "../components/atoms/vectors/ArrowBack";
import { ScrollView } from "react-native-gesture-handler";
import AppInput from "../components/molecules/AppInput";
import AppButton from "../components/atoms/AppButton";
import PlusIcon from "../components/atoms/vectors/PlusIcon";
import ArrowDownSvg from "../components/atoms/vectors/ArrowDownSvg";
import DateDropdownPicker from "../components/molecules/DateDropdownPicker";
import PaymentTemplate from "../components/molecules/PaymentTemplate";
import BudgetTemplate from "../components/molecules/BudgetTemplate";

type RenderProp = "Budget" | "addBudget" | "addPayment";

interface BudgetListProp {
  name: string;
  note?: string;
  estimatedAmount: string;
  amountPaid: string;
  amountPending: string;
}
interface PaymentProp {
  name: string;
  amount: string;
  date: string;
}

const Budget = () => {
  const [contentRender, setContentRender] = useState<RenderProp>("Budget");
  const [budgetList, setBudgetList] = useState<BudgetListProp[]>([]);
  const [isChecked, setIsChecked] = useState(false);
  const [payment, setPayment] = useState<PaymentProp[]>([]);
  const [budgetFormData, setBudgetFormData] = useState({
    name: "",
    note: "",
    estimatedAmount: "",
    // balance: "",
  });
  const [paymentFormData, setPaymentFormData] = useState({
    name: "",
    amount: "",
    date: "",
  });

  const handleNameChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPaymentFormData({ ...paymentFormData, name: e.nativeEvent.text });
  };
  const handleAmountChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setPaymentFormData({ ...paymentFormData, amount: e.nativeEvent.text });
  };
  const handleBudgetNameChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setBudgetFormData({ ...budgetFormData, name: e.nativeEvent.text });
  };
  const handleBudgetNoteChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setBudgetFormData({ ...budgetFormData, note: e.nativeEvent.text });
  };
  const handleBudgetAmountChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setBudgetFormData({
      ...budgetFormData,
      estimatedAmount: e.nativeEvent.text,
    });
  };

  const handleAddPayment = () => {
    if (
      !budgetFormData.name.trim().length ||
      !budgetFormData.estimatedAmount.trim().length
    ) {
      alert("Fill form before adding payment");
      return;
    } else if (payment.length) {
      alert("Only one payment can be added,Sorry my gee");
      return;
    }
    setContentRender("addPayment");
  };

  const handleButtonPress = () => {
    if (
      !paymentFormData.amount.trim().length ||
      !paymentFormData.name.trim().length ||
      !paymentFormData.date.trim().length
    ) {
      return alert("Abeg fill this form now ogami!!");
    }
    setPayment([...payment, paymentFormData]);
    setContentRender("addBudget");
    setPaymentFormData({ amount: "", date: "", name: "" });
  };

  const handleAddBudget = () => {
    if (
      !budgetFormData.name.trim().length ||
      !budgetFormData.estimatedAmount.trim().length
    ) {
      alert("Pls fill the name and amount on the form above");
      return;
    } else if (!payment.length) {
      alert("Pls add payment to continue chief");
      return;
    }

    setBudgetList([
      ...budgetList,
      {
        ...budgetFormData,
        amountPaid: isChecked ? payment[0].amount : "0",
        amountPending: !isChecked ? payment[0].amount : "0",
      },
    ]);
    setContentRender("Budget");
    setPayment([]);
    setBudgetFormData({ estimatedAmount: "", name: "", note: "" });
  };

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
                <View
                  style={{
                    display: "flex",
                    rowGap: hp(1.8),
                    marginBottom: hp(2),
                  }}
                >
                  {budgetList.map((budget, ind) => (
                    <BudgetTemplate {...budget} key={ind} />
                  ))}
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
                  value={budgetFormData.name}
                  handleChange={handleBudgetNameChange}
                />
                <AppInput
                  label="Note"
                  placeholder="Enter Note"
                  style={styles.input}
                  value={budgetFormData.note}
                  handleChange={handleBudgetNoteChange}
                />
                <AppInput
                  keyboardType="numeric"
                  label="Estimated Amount"
                  placeholder="Enter estimated amount"
                  style={styles.input}
                  value={budgetFormData.estimatedAmount}
                  handleChange={handleBudgetAmountChange}
                />
                <View>
                  <View style={styles.balanceView}>
                    <Text style={{ fontSize: hp(1.7) }}>
                      Balance:$
                      {!payment.length
                        ? "0"
                        : Number(budgetFormData.estimatedAmount) -
                          Number(payment[0].amount)}
                    </Text>
                    <ArrowDownSvg height={10} width={15} />
                  </View>
                  {payment.length && (
                    <View style={styles.balanceDetails}>
                      <Text style={{ fontSize: hp(1.7), color: "#D6111A" }}>
                        Pending:${!isChecked ? payment[0].amount : 0}
                      </Text>
                      <Text style={{ fontSize: hp(1.7), color: "#4CAF50" }}>
                        Paid:${isChecked ? payment[0].amount : 0}
                      </Text>
                    </View>
                  )}
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
                  <PlusIcon onPress={handleAddPayment} />
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
                  {!payment.length && (
                    <Text style={{ color: "#ACACAC", fontSize: hp(1.7) }}>
                      No payment found
                    </Text>
                  )}
                  {payment.length && (
                    <ScrollView showsVerticalScrollIndicator={false}>
                      {/* paddingTop: hp(1.2), */}
                      <View
                        style={{
                          display: "flex",
                          rowGap: hp(2),
                          paddingVertical: hp(1.5),
                        }}
                      >
                        {payment.map((data, ind) => (
                          <PaymentTemplate
                            date={data.date}
                            amount={data.amount}
                            name={data.name}
                            key={ind}
                            isChecked={isChecked}
                            handleChecked={() => setIsChecked(!isChecked)}
                          />
                        ))}
                      </View>
                    </ScrollView>
                  )}
                </View>
              </View>
              <View style={styles.buttonView}>
                <AppButton onPress={handleAddBudget} text="Add to Budget" />
              </View>
            </View>
          )}
          {contentRender === "addPayment" && (
            <View style={styles.addPaymentView}>
              <AppInput
                label="Name"
                placeholder="Enter Name"
                style={styles.input}
                handleChange={handleNameChange}
              />
              <AppInput
                keyboardType="numeric"
                label="Amount"
                placeholder="Enter Amount"
                style={styles.input}
                handleChange={handleAmountChange}
              />
              <DateDropdownPicker
                label="Purchase Date"
                value={paymentFormData.date}
                onChange={(date) =>
                  setPaymentFormData({ ...paymentFormData, date })
                }
                style={{
                  width: "100%",
                  marginTop: hp(0.7),
                }}
                fontSize={hp(1.7)}
              />
              <View style={{ marginTop: hp(4.2) }}>
                <AppButton onPress={handleButtonPress} text="Add to Payments" />
              </View>
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
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderColor: "#82828270",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp(4.3),
    marginTop: hp(2),
  },
  balanceDetails: {
    height: hp(6),
    backgroundColor: "#fff",
    paddingHorizontal: wp(4.3),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#82828270",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  paymentView: {
    marginTop: hp(4.3),
  },
  buttonView: {
    marginTop: hp(14.4),
    marginBottom: hp(2.5),
  },
  payment: {
    height: hp(18),
    // paddingBottom: hp(5),
    backgroundColor: "#fff",
    borderRadius: 8,
    borderColor: "#82828270",
    borderWidth: 1,
    paddingHorizontal: wp(3.2),
  },
  addPaymentView: {
    display: "flex",
    rowGap: hp(3.2),
    marginBottom: hp(20),
  },
});

export default Budget;
