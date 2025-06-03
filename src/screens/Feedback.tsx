import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageSourcePropType,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import AddContactSvg from "../components/atoms/vectors/AddContactSvg";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import AppButton from "../components/atoms/AppButton";
import StarSvg from "../components/atoms/vectors/StarSvg";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import * as ImagePicker from "expo-image-picker";

const Feedback = ({ navigation }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<null | string>(null);
  const [rating, setRating] = useState(0);

  const openGallery = async () => {
    // Request permission (Expo handles this automatically)
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Required",
        "Permission to access gallery is required!"
      );
      return;
    }

    // Launch gallery
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      console.log("Selected from gallery:", result.assets[0].uri);
    }
    setIsOpen(false);
  };

  const openCamera = async () => {
    // Request permission (Expo handles this automatically)
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "Permission Required",
        "Permission to access camera is required!"
      );
      return;
    }

    // Launch camera
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
    setIsOpen(false);
  };

  const handleRating = (ind: number) => {
    const newRating = ind + 1;

    if (newRating <= rating) {
      setRating(rating - 1);
    } else {
      setRating(newRating);
    }
  };

  return (
    <View>
      <View style={styles.headerView}>
        <PageHeader style={{ width: "75%" }}>
          <Text style={{ fontSize: hp(3), fontWeight: "bold" }}>
            Feedback & Review
          </Text>
        </PageHeader>
      </View>
      <KeyboardAvoidView>
        <View style={styles.contentView}>
          <View>
            <Text style={styles.contentText}>Score:</Text>
            <View style={styles.scoreView}>
              {Array.from({ length: 5 }, (_, index) => (
                <StarSvg
                  fill={
                    rating === 0
                      ? undefined
                      : index + 1 > rating
                      ? undefined
                      : "#FFCC45"
                  }
                  color={"#FFCC45"}
                  key={index}
                  onPress={() => handleRating(index)}
                />
              ))}
            </View>
          </View>
          <View>
            <Text style={styles.contentText}>Review:</Text>
            <View style={styles.inputView}>
              <TextInput
                multiline={true}
                placeholder="Start Writing here"
                style={styles.input}
              />
            </View>
          </View>
          <View style={{ marginBottom: hp(2.7) }}>
            <Text style={styles.contentText}>Share pictures or videos:</Text>
            <Pressable
              onPress={() => setIsOpen(true)}
              style={{ width: "100%", height: hp(13.5) }}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  resizeMode: "center",
                }}
                source={
                  selectedImage
                    ? { uri: selectedImage }
                    : require("../assets/Upload Image.png")
                }
              />
            </Pressable>
          </View>
          <AppButton text="Submit" onPress={() => navigation.goBack()} />
        </View>
      </KeyboardAvoidView>
      <Modal visible={isOpen} transparent={true} animationType="slide">
        <Pressable
          onPress={() => setIsOpen(false)}
          style={{
            // position: "relative",
            height: "100%",
            width: "100%",
            backgroundColor: "#0000004D",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>SELECT PHOTO </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "57%",
                marginVertical: hp(1.8),
              }}
            >
              <TouchableOpacity
                onPress={openCamera}
                style={[
                  styles.pressable,
                  { borderRightWidth: 1, borderRightColor: "#84848430" },
                ]}
              >
                <Image source={require("../assets/Vector.png")} />
                <Text
                  style={{
                    fontWeight: "medium",
                    fontSize: hp(2),
                    color: "#797979",
                  }}
                >
                  Camera
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={openGallery} style={styles.pressable}>
                <Image
                  source={require("../assets/grommet-icons_gallery.png")}
                />
                <Text
                  style={{
                    fontWeight: "medium",
                    fontSize: hp(2),
                    color: "#797979",
                  }}
                >
                  Gallery
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: "#fff",
    paddingTop: hp(4),
    paddingBottom: hp(1),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  contentView: {
    marginTop: hp(3.7),
    marginHorizontal: wp(7),
    display: "flex",
    rowGap: hp(3.7),
  },
  contentText: {
    fontWeight: "medium",
    fontSize: hp(2),
    marginBottom: hp(1.2),
  },
  scoreView: {
    display: "flex",
    flexDirection: "row",
    columnGap: wp(1.6),
  },
  inputView: {
    height: hp(21),
    borderRadius: 8,
    paddingHorizontal: wp(4.3),
    paddingVertical: hp(2),
    backgroundColor: "#fff",
    borderColor: "#82828270",
    borderWidth: 1,
  },
  input: {
    width: "100%",
    fontSize: hp(1.7),
  },
  modalContent: {
    width: wp(89),
    height: hp(19),
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  modalHeader: {
    color: "#848484",
    paddingVertical: hp(1.3),
    marginHorizontal: wp(3.7),
    fontSize: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: "#84848430",
  },
  pressable: {
    width: "50%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    rowGap: hp(1.2),
  },
});

export default Feedback;
