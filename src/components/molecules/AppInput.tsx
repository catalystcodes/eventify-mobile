import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HideIcon from "../atoms/vectors/HideIcon";

type InputTextProps = TextInputProps & {
  type?: "password" | "text";
  label?: string;
  handleChange?: (e: any) => void;
  inputValue?: string;
  header?: string;
};

const AppInput = (props: InputTextProps) => {
  const {
    type,
    secureTextEntry,
    label,
    inputValue,
    handleChange,
    header,
    ...otherProps
  } = props;

  const [hidePassword, setHidePassword] = useState(true);

  return (
    <View style={{ marginBottom: hp(2) }}>
      {label ? <Text style={styles.labelStyle}>{label}</Text> : null}
      <View>
        <TextInput
          {...otherProps}
          // value={inputValue}
          onChange={handleChange}
          style={[styles.inputStyle, otherProps.style]}
          secureTextEntry={type === "password" ? hidePassword : secureTextEntry}
        />
        {type === "password" && (
          <View
            style={{
              position: "absolute",
              right: 0,
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              zIndex: 10,
              width: wp(14),
            }}
          >
            <Pressable
              onPress={() => setHidePassword((prev) => !prev)}
              hitSlop={10}
            >
              {hidePassword ? (
                <AntDesign name="eye" size={18} color="#677294" />
              ) : (
                <HideIcon />
              )}
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: "#828282",
    fontSize: 14,
    height: hp(6.2),
    borderRadius: 8,
    paddingLeft: wp(6.7),
    zIndex: 1,
  },
  labelStyle: {
    fontSize: 16,
    marginBottom: hp(1),
    color: "#333",
  },
});
