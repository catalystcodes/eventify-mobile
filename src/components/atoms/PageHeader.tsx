import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowBack from "./vectors/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AddContact from "./vectors/AddContact";

interface PageHeaderProps {
  title?: string;
  edit?: string;
  showBackButton?: boolean;
  showAddCContactButton?: boolean;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  edit,
  showBackButton = true,
  showAddCContactButton = false,
  children,
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showAddCContactButton && (
        <Pressable
          style={{ marginLeft: wp(5.6) }}
          onPress={() => {
            console.log("Add Contact");
          }}
        >
          <AddContact />
        </Pressable>
      )}
      {showBackButton && (
        <Pressable
          style={{ marginLeft: wp(5.6) }}
          onPress={() => navigation.goBack()}
        >
          <ArrowBack />
        </Pressable>
      )}
      {title && <Text style={styles.title}>{title}</Text>}
      {edit && (
        <Text onPress={() => navigation.goBack()} style={styles.edit}>
          {edit}
        </Text>
      )}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: hp(2),
    justifyContent: "space-between",
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: wp(7.5),
  },
  edit: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default PageHeader;
