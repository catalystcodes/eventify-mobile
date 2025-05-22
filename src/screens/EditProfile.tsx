import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppInput from "../components/molecules/AppInput";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";

const EditProfile = () => {
  return (
    <KeyboardAvoidView>
      <View>
        <View
          style={{
            marginTop: hp(4.7),
            paddingVertical: hp(2),
            paddingHorizontal: wp(5.8),
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
                style={{ flexGrow: 1, width: wp(42.7) }}
                label="First Name"
                placeholder="Dylan"
              />

              <AppInput
                style={{ flexGrow: 1, width: wp(42.7) }}
                label="Last Name"
                placeholder="Thomas"
              />
            </View>
            <AppInput label="E-mail" placeholder="dylanthomas@server.com" />
            <AppInput label="Country" placeholder="dylanthomas@server.com" />
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
  editDetails: {},
});

export default EditProfile;
