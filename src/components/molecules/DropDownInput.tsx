import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import DropDown from "../atoms/vectors/DropDown";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const countries = [
  "United States",
  "India",
  "Canada",
  "United Kingdom",
  "South Africa",
  "Germany",
];

const CountryDropdown: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState("India");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSelect = (country: string) => {
    setSelectedCountry(country);
    setShowDropdown(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Country</Text>

      <TouchableOpacity
        style={styles.dropdown}
        onPress={() => setShowDropdown((prev) => !prev)}
        activeOpacity={0.8}
      >
        <Text style={styles.selectedText}>{selectedCountry}</Text>
        <DropDown
          style={{
            transform: [{ rotate: showDropdown ? "180deg" : "0deg" }],
          }}
        />
      </TouchableOpacity>

      {showDropdown && (
        <View style={styles.dropdownList}>
          {countries.map((country) => (
            <TouchableOpacity
              key={country}
              style={styles.dropdownItem}
              onPress={() => handleSelect(country)}
            >
              <Text style={styles.dropdownItemText}>{country}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CountryDropdown;

const styles = StyleSheet.create({
  container: {
    // margin: 16,
  },
  label: {
    fontSize: hp(1.7),
    marginBottom: hp(0.5),
    color: "#333",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 8,
    paddingHorizontal: wp(4.3),
    paddingVertical: hp(2),
    backgroundColor: "#fff",
  },
  selectedText: {
    fontSize: hp(1.7),
    color: "#000",
  },
  dropdownList: {
    borderWidth: 1,
    borderColor: "#828282",
    borderRadius: 8,
    backgroundColor: "#fff",
    marginTop: hp(0.5),
    overflow: "hidden",
  },
  dropdownItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  dropdownItemText: {
    fontSize: hp(1.7),

    color: "#333",
  },
});
