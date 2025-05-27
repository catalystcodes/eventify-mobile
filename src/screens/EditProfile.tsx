import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInput from "../components/molecules/AppInput";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import CountryDropdown from "../components/molecules/DropDownInput";

const EditProfile = () => {
  const [selected, setSelected] = useState("India");

  return (
    <KeyboardAvoidView>
      <View>
        <View
          style={{
            paddingTop: hp(4.7),
            paddingVertical: hp(2),
            paddingRight: wp(5.8),
            backgroundColor: "white",
          }}
        >
          <PageHeader edit="SAVE" title="Edit Profile" />
        </View>
        <View style={{ paddingHorizontal: wp(5.3) }}>
          <View style={styles.profilePhoto}>
            <Image source={require("../assets/EditProfilePhoto.png")} />
          </View>
          <View style={styles.editDetails}>
            <View style={styles.editNames}>
              <AppInput
                style={{
                  flexGrow: 1,
                  width: wp(42.7),
                  backgroundColor: "white",
                }}
                label="First Name"
                placeholder="Dylan"
              />

              <AppInput
                style={{
                  flexGrow: 1,
                  width: wp(42.7),
                  backgroundColor: "white",
                }}
                label="Last Name"
                placeholder="Thomas"
              />
            </View>
            <AppInput
              style={{ backgroundColor: "white" }}
              label="E-mail"
              placeholder="dylanthomas@server.com"
            />

            <CountryDropdown
              selectedItem={selected}
              onSelect={setSelected}
              dropdownItems={[
                "United States",
                "India",
                "Canada",
                "United Kingdom",
                "South Africa",
                "Germany",
              ]}
            />
            <View>
              <Text style={{ marginBottom: hp(0.5) }}>Phone Number</Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: wp(2.7),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderColor: "#828282",
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      borderRightWidth: 1,
                      paddingHorizontal: wp(1.6),
                      paddingVertical: hp(1.6),
                    }}
                  >
                    <Image source={require("../assets/Countryflag.png")} />
                  </View>

                  <Text
                    style={{
                      paddingHorizontal: wp(1.6),
                    }}
                  >
                    +91
                  </Text>
                </View>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "#828282",
                    borderRadius: 8,
                    paddingVertical: hp(2),
                    paddingHorizontal: wp(4.3),
                    width: wp(63.5),
                    backgroundColor: "white",
                  }}
                >
                  <TextInput placeholder="Enter phone number" />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </KeyboardAvoidView>
  );
};

const styles = StyleSheet.create({
  profilePhoto: {
    alignItems: "center",
    marginVertical: hp(4.9),
  },
  editNames: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: wp(4),
  },
  editDetails: {
    rowGap: hp(3.7),
  },
});

export default EditProfile;
