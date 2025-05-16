import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/AppButton";

const WelcomePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Welcome to EventJoy</Text>
      <Text style={styles.h2}>
        Create an account with us and experience seamless event planning.
      </Text>
      <View style={styles.buttonContainer}>
        <AppButton
          text="Crate Account"
          onPress={() => console.log("Create Account")}
        />
        <AppButton
          text="Login"
          onPress={() => console.log("Login")}
          backgroundColor="#fff"
          textColor="#F0534F"
          borderColor="#F0534F"
        />
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(10.1),
  },
  h1: {
    fontSize: 24,
    textAlign: "center",
    marginTop: hp(35.5),
    fontWeight: "bold",
  },
  h2: {
    fontSize: 16,
    textAlign: "center",
    marginTop: hp(1.8),
    fontWeight: "medium",
    marginBottom: hp(31.5),
  },
  buttonContainer: {
    rowGap: hp(1.2),
  },
});
