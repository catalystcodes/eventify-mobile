import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ProfileSection from "../components/molecules/ProfileSection";

const Profile = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require("../assets/ProfilePhoto.png")} />
        <View>
          <Text
            style={{
              fontSize: hp(2.9),
              fontWeight: "bold",
              marginBottom: hp(0.7),
            }}
          >
            Dylan Thomas
          </Text>
          <Text style={{ fontSize: hp(1.7) }}>dylanthomas@server.com</Text>
        </View>
      </View>
      <View>
        <ProfileSection
          text="Edit Profile"
          onPress={() => navigation.navigate("editProfile")}
        />
        <ProfileSection
          text="Notifications"
          onPress={() => navigation.navigate("notification")}
        />
        <ProfileSection
          text="Frequently Asked Questions"
          onPress={() => navigation.navigate("faq")}
        />
        <ProfileSection
          text="Contact Us"
          onPress={() => navigation.navigate("contactUs")}
        />
        <ProfileSection text="Sign Out" />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginTop: hp(6.2),
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "#F0534F",
            fontSize: 14,
            borderRightWidth: 1,
            borderColor: "#848484",
            paddingRight: wp(2.6),
          }}
        >
          Terms of Service
        </Text>
        <Text
          style={{
            color: "#F0534F",
            fontSize: 14,
            paddingLeft: wp(2.6),
          }}
        >
          Privacy Policy
        </Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    marginTop: hp(4.7),
    paddingHorizontal: wp(8),
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4.8),
    marginTop: hp(3.7),
    marginBottom: hp(6.2),
  },
});
