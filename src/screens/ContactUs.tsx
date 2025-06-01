import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import PhoneLineSvg from "../components/atoms/vectors/PhoneLineSvg";
import MailSvg from "../components/atoms/vectors/MailSvg";
import FacebookSvg from "../components/atoms/vectors/FacebookSvg";
import InstagramSvg from "../components/atoms/vectors/InstagramSvg";
import TwitterSvg from "../components/atoms/vectors/TwitterSvg";
import { ScrollView } from "react-native-gesture-handler";
import { Linking, Alert } from "react-native";

const ContactUs = () => {
  const openDialPad = (phoneNum: number) => {
    const phoneUrl = `tel:${phoneNum}`;

    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        } else {
          Alert.alert("Error", "Phone calls are not supported on this device");
        }
      })
      .catch((err) => console.error("error opening dialer", err));
  };

  const openEmail = (address: string) => {
    const emailUrl = `mailto:${address}?subject=${encodeURIComponent(
      ""
    )}&body=${encodeURIComponent("")}`;

    Linking.canOpenURL(emailUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(emailUrl);
        } else {
          Alert.alert("Error", "Email is not supported on this device");
        }
      })
      .catch((err) => console.error("Error opening email:", err));
  };

  const openFacebook = (facebookUsername: string) => {
    const facebookAppUrl = `fb://page/${facebookUsername}`;
    const facebookWebUrl = `https://www.facebook.com/${facebookUsername}`;

    Linking.canOpenURL(facebookAppUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(facebookAppUrl);
        } else {
          return Linking.openURL(facebookWebUrl);
        }
      })
      .catch(() => {
        Linking.openURL(facebookWebUrl);
      });
  };

  const openInstagram = (accountName: string) => {
    const instagramAppUrl = `instagram://user?username=${accountName}`;
    const instagramWebUrl = `https://www.instagram.com/${accountName}`;

    Linking.canOpenURL(instagramAppUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(instagramAppUrl);
        } else {
          return Linking.openURL(instagramWebUrl);
        }
      })
      .catch(() => {
        Linking.openURL(instagramWebUrl);
      });
  };

  const openTwitter = (accountName: string) => {
    const twitterAppUrl = `twitter://user?screen_name=${accountName}`;
    const twitterWebUrl = `https://twitter.com/${accountName}`;

    Linking.canOpenURL(twitterAppUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(twitterAppUrl);
        } else {
          return Linking.openURL(twitterWebUrl);
        }
      })
      .catch(() => {
        Linking.openURL(twitterWebUrl);
      });
  };

  return (
    <View>
      <View style={styles.headerView}>
        <PageHeader style={{ paddingRight: "65%" }}>
          <View
            style={{
              marginLeft: wp(7),
            }}
          >
            <Text style={{ fontSize: hp(2.5), fontWeight: "bold" }}>
              Contact us
            </Text>
          </View>
        </PageHeader>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: hp(3) }}
          >
            Get in Touch
          </Text>
          <View
            style={{ display: "flex", alignItems: "center", marginTop: hp(2) }}
          >
            <View
              style={{
                display: "flex",
                alignItems: "flex-start",
                rowGap: hp(0.7),
              }}
            >
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: hp(1.8),
                }}
              >
                If you have any inquires, get in touch with us.
              </Text>
              <Text
                style={{
                  fontWeight: "semibold",
                  fontSize: hp(1.8),
                }}
              >
                We'll be happy to help you.
              </Text>
            </View>
          </View>
          {/* <TouchableOpacity > */}
          <TouchableOpacity
            onPress={() => openDialPad(+2348067484632)}
            style={styles.contact}
          >
            <PhoneLineSvg />
            <Text style={{ fontSize: hp(1.8) }}>+234-806-7484-632</Text>
          </TouchableOpacity>
          {/* </TouchableOpacity> */}

          <TouchableOpacity
            onPress={() => openEmail("mujibasiyanbi@gmail.com")}
            style={[styles.contact, { marginTop: hp(3) }]}
          >
            <MailSvg />
            <Text style={{ fontSize: hp(1.8) }}>mujibasiyanbi@gmail.com</Text>
          </TouchableOpacity>
          <View style={{ marginTop: hp(7) }}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: hp(2.7),
              }}
            >
              Social Media
            </Text>
            <View style={styles.socialContact}>
              <TouchableOpacity
                onPress={() => openFacebook("asiyanbiabdulmujib")}
                style={styles.socials}
              >
                <FacebookSvg width={40} height={40} />
                <Text
                  style={{ width: "80%", fontSize: hp(1.6), color: "#848484" }}
                >
                  Stay updated,connect, and engage with us on Facebook.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openInstagram("codenojustu")}
                style={styles.socials}
              >
                <InstagramSvg width={40} height={40} />
                <Text
                  style={{ width: "80%", fontSize: hp(1.6), color: "#848484" }}
                >
                  Explore our virtual world and discover beauty of our brand.
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => openTwitter("animeDev_")}
                style={styles.socials}
              >
                <TwitterSvg width={40} height={40} />
                <Text
                  style={{ width: "80%", fontSize: hp(1.6), color: "#848484" }}
                >
                  Follow us for real-life updates and lovely discussions.
                </Text>
              </TouchableOpacity>
            </View>
          </View>
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
  container: {
    marginTop: hp(5),
    marginHorizontal: wp(6),
  },
  contact: {
    marginTop: hp(7),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4),
    borderColor: "#84848470",
    borderWidth: 1,
    paddingHorizontal: wp(4),
    paddingVertical: hp(2.5),
    borderRadius: 30,
  },
  socialContact: {
    marginTop: hp(5),
    display: "flex",
    rowGap: hp(3.5),
    width: "100%",
  },
  socials: {
    width: "100%",
    display: "flex",
    columnGap: wp(4),
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ContactUs;
