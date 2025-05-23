import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PageHeader from "../components/atoms/PageHeader";
import ShowMoreIcon from "../components/atoms/vectors/ShowMoreIcon";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AddContactSvg from "../components/atoms/vectors/AddContactSvg";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import SearchSvg from "../components/atoms/vectors/SearchSvg";
import CancelSvg from "../components/atoms/vectors/CancelSvg";
import GuestListTemplate from "../components/atoms/GuestListTemplate";
import { guestData } from "../constantData";

interface guestDataProp {
  fullname: string;
  email: string;
  people: string;
}

type GuestInfoProp = {
  filter: string;
  info: guestDataProp[];
};

const GuestList = () => {
  const [showCancel, setShowCancel] = useState(false);
  const [guestInfo, setGuestInfo] = useState<GuestInfoProp>();

  useEffect(() => {
    setGuestInfo({ filter: "All", info: guestData });
  }, []);

  const handleFilter = (filter: string) => {
    const filteredGuest = guestData.filter((info) => {
      if (filter === "All") {
        return guestData;
      } else if (filter === "Yes") {
        return info.people.includes("Adult");
      }
      return info.people === filter;
    });
    setGuestInfo({ filter, info: filteredGuest });
  };

  return (
    <View>
      <View style={styles.headerView}>
        {/* <PageHeader /> */}
        <PageHeader>
          <View
            style={{
              marginLeft: wp(23),
              display: "flex",
              flexDirection: "row",
              width: "62%",
              justifyContent: "space-between",
              // columnGap: wp(10),
            }}
          >
            <Text style={{ fontSize: hp(3), fontWeight: "bold" }}>
              Guest List
            </Text>

            <Pressable style={{}}>
              <AddContactSvg />
            </Pressable>
          </View>
        </PageHeader>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        // style={{ marginTop: 1 }}
      >
        <View style={styles.filterView}>
          <Text
            onPress={() => handleFilter("All")}
            style={[
              styles.text,
              // { paddingBottom: hp(2), marginLeft: wp(2) },
              guestInfo?.filter === "All"
                ? {
                    borderBottomColor: "#F0534F",
                    color: "#1D1D1D",
                    fontWeight: "semibold",
                    paddingBottom: hp(2.4),
                  }
                : {
                    color: "#848484",
                    fontWeight: "medium",
                    borderBottomColor: "transparent",
                  },
            ]}
          >
            All({guestData.length})
          </Text>
          <Text
            onPress={() => handleFilter("Yes")}
            style={[
              styles.text,
              // { paddingBottom: 0 },
              guestInfo?.filter === "Yes"
                ? {
                    borderBottomColor: "#F0534F",
                    color: "#1D1D1D",
                    fontWeight: "semibold",
                  }
                : {
                    color: "#848484",
                    fontWeight: "medium",
                    borderBottomColor: "transparent",
                  },
            ]}
          >
            Yes(
            {guestData.filter((info) => info.people.includes("Adult")).length})
          </Text>
          <Text
            onPress={() => handleFilter("No")}
            style={[
              styles.text,
              // { paddingBottom: 0 },
              guestInfo?.filter === "No"
                ? {
                    borderBottomColor: "#F0534F",
                    color: "#1D1D1D",
                    fontWeight: "semibold",
                  }
                : {
                    color: "#848484",
                    fontWeight: "medium",
                    borderBottomColor: "transparent",
                  },
            ]}
          >
            No({guestData.filter((info) => info.people === "No").length})
          </Text>
          <Text
            onPress={() => handleFilter("Not Yet Replied")}
            style={[
              styles.text,
              // { paddingBottom: 0 },
              guestInfo?.filter === "Not Yet Replied"
                ? {
                    borderBottomColor: "#F0534F",
                    color: "#1D1D1D",
                    fontWeight: "semibold",
                  }
                : {
                    color: "#848484",
                    fontWeight: "medium",
                    borderBottomColor: "transparent",
                  },
            ]}
          >
            Not Yet Replied(
            {
              guestData.filter((info) => info.people === "Not Yet Replied")
                .length
            }
            )
          </Text>
        </View>
      </ScrollView>
      <ScrollView bounces={false} style={{ paddingTop: hp(2.5) }}>
        <View style={styles.searchView}>
          <SearchSvg />
          <TextInput
            style={{ fontSize: hp(1.7), width: "78%" }}
            placeholder="Search Contacts"
            onFocus={() => setShowCancel(true)}
            onBlur={() => setShowCancel(false)}
            onChange={() => {}}
          />
          {showCancel && <CancelSvg />}
        </View>
        <View style={styles.guestList}>
          {guestInfo?.info.map((item, index) => (
            <GuestListTemplate {...item} key={index} />
          ))}
        </View>
      </ScrollView>
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
  filterView: {
    marginTop: 1,
    backgroundColor: "#fff",
    paddingHorizontal: wp(2.7),
    paddingTop: hp(3),
    display: "flex",
    flexDirection: "row",
    // alignItems: "center",
    columnGap: wp(13),
    // paddingBottom: hp(2),
    // height: hp(20),
  },
  text: {
    fontSize: hp(2.2),
    paddingBottom: hp(1),
    // height: hp(4.6),
    borderBottomWidth: 4,
  },
  searchView: {
    marginHorizontal: wp(5.33),
    backgroundColor: "#fff",
    // width: "100%",
    borderRadius: 10,
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(3.5),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: wp(4.26),
  },
  guestList: {
    display: "flex",
    marginTop: hp(4.3),
    marginHorizontal: wp(5.33),
    rowGap: hp(2.46),
    marginBottom: hp(27),
  },
});

export default GuestList;
