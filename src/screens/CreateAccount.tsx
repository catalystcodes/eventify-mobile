import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/AppButton";
import GoogleIcon from "../components/atoms/vectors/GoogleIcon";
import FaceBookIcon from "../components/atoms/vectors/FaceBookIcon";
import OrSection from "../components/atoms/OrSection";
import AppInput from "../components/molecules/AppInput";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const CreateAccount = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidView>
        <View style={{ marginTop: hp(1.3) }}>
          <PageHeader />
        </View>
        <View style={styles.subContainer}>
          <View style={{ rowGap: hp(1.2), marginBottom: hp(5) }}>
            <AppButton
              text="Sign up with Google"
              backgroundColor="#fff"
              textColor="#000"
              onPress={() => {}}
              borderColor="#1D1D1D"
              icon={<GoogleIcon />}
              fontSize={wp(3.7)}
            />
            <AppButton
              text="Sign up with Facebook"
              backgroundColor="#fff"
              textColor="#000"
              onPress={() => {}}
              borderColor="#1D1D1D"
              fontSize={wp(3.7)}
              icon={<FaceBookIcon />}
            />
          </View>
          <View style={{ rowGap: hp(1.2), marginBottom: hp(5) }}>
            <OrSection />
          </View>
          <View>
            <AppInput placeholder="Enter Name" label="Name" />
            <AppInput placeholder="Enter e-mail" label="E-mail" />
            <AppInput
              placeholder="Enter password"
              label="Password"
              type="password"
            />
          </View>
          <Text style={{ fontSize: wp(3.2) }}>
            By creating your account, you agree to the
          </Text>
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              columnGap: wp(1.1),
              marginBottom: hp(2.5),
            }}
          >
            <Text style={{ fontSize: wp(3.2), color: "#F0534F" }}>
              Terms of Service
            </Text>
            <Text style={{ fontSize: wp(3.2) }}>and</Text>
            <Text style={{ fontSize: wp(3.2), color: "#F0534F" }}>
              Privacy Policy
            </Text>
          </View>
          <AppButton text="Create Account" onPress={() => {}} />
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(4.7),
    flexGrow: 1,
    backgroundColor: "white",
  },
  subContainer: {
    marginTop: hp(6.2),
    paddingHorizontal: wp(10.1),
  },
});
