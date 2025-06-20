import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

interface ContactCardProps {
  name: string;
  phone: string;
  isSelected: boolean;
  onToggle: () => void;
}

const ContactCard: React.FC<ContactCardProps> = ({
  name,
  phone,
  isSelected,
  onToggle,
}) => {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <Pressable style={styles.card} onPress={onToggle}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{initials}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
      <Checkbox
        style={{
          borderRadius: 50,
          height: heightPercentageToDP(2.7),
          width: wp(5.9),
        }}
        value={isSelected}
        onValueChange={onToggle}
        color={isSelected ? "#4CAF50" : undefined}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#d5d5d5",
    borderBottomWidth: 1,
    marginBottom: hp(2),
    paddingBottom: hp(2.6),
  },
  avatar: {
    width: wp(12),
    height: wp(12),
    borderRadius: wp(6),
    backgroundColor: "#FDE4E4",
    justifyContent: "center",
    alignItems: "center",
    marginRight: wp(4),
  },
  avatarText: {
    fontSize: wp(5),
    fontWeight: "bold",
    color: "#F0534F",
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: wp(4.2),
    fontWeight: "600",
    color: "#333",
  },
  phone: {
    fontSize: wp(3.5),
    color: "#666",
    marginTop: hp(0.4),
  },
});

export default ContactCard;
