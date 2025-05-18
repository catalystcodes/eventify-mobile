import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import SendMessageIcon from "../components/atoms/vectors/SendMessageIcon";
import { ScrollView } from "react-native-gesture-handler";
import KeyboardAvoidView from "../components/molecules/KeyboardAvoidView";
import PageHeader from "../components/atoms/PageHeader";
import ShowMoreIcon from "../components/atoms/vectors/ShowMoreIcon";

const MessagesChat = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <PageHeader>
          <View
            style={{
              marginLeft: wp(7.47),
              display: "flex",
              flexDirection: "row",
              width: "88%",
              justifyContent: "space-between",
            }}
          >
            <View style={{ display: "flex", rowGap: hp(1) }}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Family Get- Together
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "light" }}>
                15 Participants{" "}
              </Text>
            </View>

            <Pressable onPress={() => setShowMore(!showMore)}>
              <ShowMoreIcon />
            </Pressable>
          </View>
        </PageHeader>
        {showMore && (
          <View style={styles.showMoreView}>
            <Text
              onPress={() => setShowMore(false)}
              style={{ fontSize: 16, fontWeight: "medium" }}
            >
              See all participant
            </Text>
          </View>
        )}
      </View>
      <KeyboardAvoidView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.messageView}
        >
          <Text
            style={{
              width: "100%",
              fontSize: 12,
              position: "absolute",
              top: hp(68.9),
              left: "auto",
              color: "#848484",
              textAlign: "center",
            }}
          >
            Messages are sent to each guest privately.
          </Text>
        </ScrollView>
        <View style={styles.inputView}>
          <TextInput style={styles.input} placeholder="Write a message" />
          <SendMessageIcon />
        </View>
      </KeyboardAvoidView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  headerView: {
    position: "relative",
    paddingTop: hp(6.52),
    paddingBottom: hp(2),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
  },
  messageView: {
    // flex: 1,
    backgroundColor: "#82828230",
    width: "100%",
  },
  inputView: {
    backgroundColor: "#fff",
    paddingHorizontal: wp(5.33),
    paddingTop: hp(2.23),
    paddingBottom: hp(3),
    boxShadow: "0 0 4px 0 #1D1D1D20 ",
    display: "flex",
    flexDirection: "row",
    columnGap: wp(4.26),
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#82828270",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: wp(2.67),
    paddingVertical: hp(1.23),
    flex: 1,
    fontSize: 14,
  },
  showMoreView: {
    position: "absolute",
    backgroundColor: "white",
    paddingVertical: hp(2.46),
    paddingHorizontal: wp(5.33),
    bottom: -30,
    right: wp(4),
    borderRadius: 10,
    boxShadow: "0 0 4px 0 #1D1D1D12",
    zIndex: 999,
  },
});

export default MessagesChat;
