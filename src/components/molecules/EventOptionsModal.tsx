import { View, Text, Modal, Pressable, StyleSheet } from "react-native";
import React from "react";
import CancelSvg from "../atoms/vectors/CancelSvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import OptionsTemplate from "../atoms/OptionsTemplate";

interface Data {
  Icon: any;
  text: string;
}
interface Props {
  showModal: boolean;
  handleModalPress: () => void;
  header: string;
  data: Data[];
  height?: number;
}

const EventOptionsModal = ({
  showModal,
  handleModalPress,
  data,
  header,
  height = 24,
}: Props) => {
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
        <View style={[styles.modalView, { height: hp(height) }]}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#848484", fontSize: hp(2.2) }}>
              {header}
            </Text>
            <CancelSvg onPress={handleModalPress} />
          </View>
          <View style={styles.calendarView}>
            {data?.map((data, ind) => (
              <OptionsTemplate key={ind} Icon={data.Icon} text={data.text} />
            ))}
          </View>

          {/* <Pressable style={[styles.options]}>
            <BinSvg />
            <Text style={{ fontWeight: "medium", fontSize: hp(2) }}>
              Cancel Event
            </Text>
          </Pressable> */}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: "#fff",
    width: "100%",
    // height: hp(height),
    position: "absolute",
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: wp(5.5),
    paddingTop: hp(2.46),
  },
  calendarView: {
    marginTop: hp(4.7),
    display: "flex",
    rowGap: hp(2.46),
    // marginBottom: hp(2.46),
  },
});

export default EventOptionsModal;
