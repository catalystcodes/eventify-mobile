import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface TimeDropdownPickerProps {
  label: string;
  value: string;
  onChange: (time: string) => void;
}

const hours = Array.from({ length: 12 }, (_, i) => i + 1);
const minutes = ["00", "15", "30", "45"];
const periods = ["AM", "PM"];

const TimeDropdownPicker = ({
  label,
  value,
  onChange,
}: TimeDropdownPickerProps) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>

      <Pressable
        style={styles.inputBox}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Text style={styles.inputText}>{value || "12:00 AM"}</Text>
      </Pressable>

      {showDropdown && (
        <View style={styles.dropdownContainer}>
          <View style={styles.row}>
            {hours.map((h) => (
              <Pressable
                key={h}
                style={styles.option}
                onPress={() => onChange(`${h}:00 AM`)}
              >
                <Text>{h}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.row}>
            {minutes.map((m) => (
              <Pressable
                key={m}
                style={styles.option}
                onPress={() => onChange(`12:${m} AM`)}
              >
                <Text>{m}</Text>
              </Pressable>
            ))}
          </View>

          <View style={styles.row}>
            {periods.map((p) => (
              <Pressable
                key={p}
                style={styles.option}
                onPress={() => onChange(`12:00 ${p}`)}
              >
                <Text>{p}</Text>
              </Pressable>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    color: "#333",
    marginBottom: 6,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    width: 160,
    backgroundColor: "white",
  },
  inputText: {
    fontSize: 16,
    color: "#333",
  },
  dropdownContainer: {
    position: "absolute",
    top: 75,
    zIndex: 10,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 10,
    width: 250,
    elevation: 5,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginVertical: 4,
  },
  option: {
    padding: 6,
    margin: 4,
    borderRadius: 6,
    backgroundColor: "#eee",
  },
});

export default TimeDropdownPicker;
