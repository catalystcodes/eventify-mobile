import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
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
import { useDispatch } from "react-redux";
import { doAPILogin } from "../service";
import { login } from "../store/authReducer";
import Toast from "react-native-toast-message";
const Login = ({ navigation }: any) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const disableButton =
    form.username.trim() === "" || form.password.trim() === "" || isLoading;

  // const handleLogin = async () => {
  //   if (disableButton) return;
  //   setIsLoading(true);
  //   try {
  //     // const data = await doLogin(form);
  //     const data = await doAPILogin(form);
  //     // if (data) {
  //     //   setUserInfo(form.username);
  //     // }
  //     console.log({ data });
  //     if (data) {
  //       dispatch(login(data));
  //     }
  //   } catch (error: any) {
  //     Toast.show({
  //       type: "error",
  //       text1: "Login Failed",
  //       text2:
  //         error?.response?.data?.message ||
  //         "Something went wrong. Please try again.",
  //     });
  //   }
  //   {
  //     setIsLoading(false);
  //   }
  // };
  const handleLogin = async () => {
    if (disableButton) return;
    setIsLoading(true);
    try {
      const data = await doAPILogin(form);
      if (data) {
        dispatch(login(data));
        Toast.show({
          type: "success",
          text1: "Login Successful",
          text2: `Welcome back, ${form.username}!`,
        });
      }
    } catch (error: any) {
      Toast.show({
        type: "error",
        text1: "Login Failed",
        text2:
          error?.response?.data?.message || "Invalid username or password.",
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidView>
        <View style={{ marginTop: hp(1.3) }}>
          <PageHeader />
        </View>
        <View style={styles.subContainer}>
          <View style={{ rowGap: hp(1.2), marginBottom: hp(5) }}>
            <AppButton
              text="Login with Google"
              backgroundColor="#fff"
              textColor="#000"
              onPress={() => {}}
              borderColor="#1D1D1D"
              icon={<GoogleIcon />}
              fontSize={wp(3.7)}
            />
            <AppButton
              text="Login with Facebook"
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
          <View style={{ rowGap: hp(2) }}>
            <AppInput
              placeholder="Enter username"
              label="Username"
              value={form.username}
              onChangeText={(text) =>
                setForm((currentValue) => ({ ...currentValue, username: text }))
              }
            />
            <AppInput
              placeholder="Enter password"
              label="Password"
              type="password"
              value={form.password}
              onChangeText={(text) =>
                setForm((currentValue) => ({ ...currentValue, password: text }))
              }
            />
          </View>

          <View style={{ marginTop: hp(3.7) }}></View>
          <AppButton text="Login" onPress={handleLogin} />
          <Text
            style={{ fontSize: wp(3.7), color: "#F0534F", marginTop: hp(1.8) }}
          >
            Forgot Your Password
          </Text>
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(4.7),
    backgroundColor: "white",
    flexGrow: 1,
  },
  subContainer: {
    marginTop: hp(9),
    paddingHorizontal: wp(10.1),
  },
});
