import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import BinSvg from "../atoms/vectors/BinSvg";
import CalendarSvg from "../atoms/vectors/CalendarSvg";
import CancelSvg from "../atoms/vectors/CancelSvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface Props {
  showModal: boolean;
  handleModalPress: () => void;
}

const EventOptionsModal = ({ showModal, handleModalPress }: Props) => {
  return (
    <Modal
      //   hardwareAccelerated={true}
      transparent={showModal}
      //   aria-hidden={false}
      visible={showModal}
      animationType="slide"
    >
      <Pressable
        onPress={handleModalPress}
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
          backgroundColor: "#0000004D",
        }}
      >
        <View style={styles.modalView}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#848484", fontSize: hp(2.2) }}>
              EVENT OPTIONS
            </Text>
            <CancelSvg onPress={handleModalPress} />
          </View>
          <Pressable style={[styles.calendarView, styles.options]}>
            <CalendarSvg />
            <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
              Add to Calendar
            </Text>
          </Pressable>
          <Pressable style={[styles.options]}>
            <BinSvg />
            <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
              Cancel Event
            </Text>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fff",
    width: "100%",
    height: hp(24),
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: wp(5.5),
    paddingTop: hp(2.46),
  },
  options: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: hp(2.2),
    marginLeft: wp(1.6),
  },
  calendarView: {
    marginTop: hp(4.7),
    marginBottom: hp(2.46),
  },
});

export default EventOptionsModal;
