import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import ArrowBack from "./vectors/ArrowBack";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface PageHeaderProps {
  title?: string;
  edit?: string;
  children?: React.ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, edit, children }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        style={{ marginLeft: wp(5.6) }}
        onPress={() => navigation.goBack()}
      >
        <ArrowBack />
      </Pressable>
      {title && <Text style={styles.title}>{title}</Text>}
      {edit && <Text style={styles.edit}>{edit}</Text>}
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
  },
  title: {
    flex: 1,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: wp(5.3),
  },
  edit: {
    color: "#4CAF50",
    fontSize: 16,
    fontWeight: "medium",
  },
});

export default PageHeader;
