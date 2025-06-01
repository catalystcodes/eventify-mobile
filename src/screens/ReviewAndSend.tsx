import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Modal, Pressable } from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import ProgressGauge from "../components/atoms/ProgressGauge";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AppButton from "../components/atoms/AppButton";
import Invitation_Preview from "../components/organisms/Invitation_Preview";
import ModalClose from "../components/atoms/vectors/ModalClose";
import { useNavigation } from "@react-navigation/native";

const ReviewAndSend = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
          paddingRight: wp(1.7),
        }}
      >
        <PageHeader title="5 of 5: Review & Send" />
      </View>
      <ProgressGauge currentPhase={5} totalPhases={5} />
      <View
        style={{
          marginTop: hp(4.6),
          alignItems: "center",
          marginBottom: hp(5),
        }}
      >
        <Image
          source={require("../assets/Card.png")}
          style={{ width: wp(67.3), height: hp(43.3) }}
        />
      </View>
      <View style={{ paddingHorizontal: wp(16.5), flex: 1 }}>
        <AppButton
          onPress={() => {
            setModalVisible(true);
          }}
          text="Preview Invitation"
          backgroundColor="#f7efef"
          borderColor="#F0534F"
          textColor="#F0534F"
          previewIcon={true}
        />
      </View>
      <View style={{ marginBottom: hp(2.5), paddingHorizontal: wp(5.3) }}>
        <AppButton
          text="Send Invitation"
          onPress={() => {
            navigation.navigate("createEventDone");
          }}
        />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                // padding: hp(2),
                paddingTop: hp(4.7),
                paddingVertical: hp(2),
                paddingRight: wp(5.8),
                backgroundColor: "white",
              }}
            >
              <View></View>
              <Text style={{ fontSize: 24, fontWeight: "bold" }}>Preview</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <ModalClose />
              </Pressable>
            </View>

            <View style={{ marginBottom: hp(20) }}>
              <Invitation_Preview title="Preview" showPageHeader={false} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ReviewAndSend;
