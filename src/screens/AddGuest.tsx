import React, { useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  Modal,
  ScrollView,
} from "react-native";
import PageHeader from "../components/atoms/PageHeader";
import ProgressGauge from "../components/atoms/ProgressGauge";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import AddContact from "../components/atoms/vectors/AddContact";
import AppButton from "../components/atoms/AppButton";
import { useNavigation } from "@react-navigation/native";
import * as Contacts from "expo-contacts";
import ContactCard from "../components/molecules/ContactCard";

const AddGuest = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const navigation = useNavigation<any>();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) setContacts(data);
      }
    })();
  }, []);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderContact = ({ item }: { item: Contacts.Contact }) => {
    const phone = item.phoneNumbers?.[0]?.number ?? "No number";
    const isSelected = item.id ? selectedIds.includes(item.id) : false;

    return (
      <ContactCard
        name={item.name || "No Name"}
        phone={phone}
        isSelected={isSelected}
        onToggle={() => item.id && toggleSelection(item.id)}
      />
    );
  };

  const filteredContacts = contacts.filter((contact) => {
    const name = contact.name?.toLowerCase() || "";
    const rawPhone = contact.phoneNumbers?.[0]?.number;
    const phone = rawPhone ? rawPhone.toLowerCase() : "";
    return (
      name.includes(searchTerm.toLowerCase()) ||
      phone.includes(searchTerm.toLowerCase())
    );
  });

  const selectedGuests = contacts.filter(
    (c) => c.id && selectedIds.includes(c.id)
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <PageHeader title="4 of 5: Add Guests">
          <Pressable onPress={() => navigation.navigate("createContact")}>
            <AddContact />
          </Pressable>
        </PageHeader>
      </View>

      <ProgressGauge currentPhase={4} totalPhases={5} />

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search contacts..."
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={filteredContacts}
          keyExtractor={(item) =>
            item.id ?? `${item.name}-${item.phoneNumbers?.[0]?.number}`
          }
          renderItem={renderContact}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              No contacts found. Please allow access or add one manually.
            </Text>
          }
          contentContainerStyle={{ padding: 16 }}
        />
      </View>

      {selectedGuests.length > 0 && (
        <View style={styles.selectionInfo}>
          <Pressable onPress={() => setModalVisible(true)}>
            <Text style={styles.selectionCount}>
              {selectedGuests.length} guest
              {selectedGuests.length > 1 ? "s" : ""} selected - See all
            </Text>
          </Pressable>

          <View style={styles.initialsContainer}>
            {selectedGuests.map((guest) => {
              const initials = guest.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase();
              return (
                <View key={guest.id} style={styles.initialCircle}>
                  <Text style={styles.initialText}>{initials}</Text>
                </View>
              );
            })}
          </View>
        </View>
      )}

      <View style={styles.buttonContainer}>
        <AppButton
          text="Next: Review & Send"
          onPress={() =>
            navigation.navigate("reviewAndSend", { selectedGuests })
          }
          disabled={selectedIds.length === 0}
        />
      </View>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selected Guests</Text>
            <ScrollView>
              {selectedGuests.map((guest) => (
                <ContactCard
                  key={guest.id}
                  name={guest.name || "No Name"}
                  phone={guest.phoneNumbers?.[0]?.number ?? "No number"}
                  isSelected={selectedIds.includes(guest.id!)}
                  onToggle={() => guest.id && toggleSelection(guest.id)}
                />
              ))}
            </ScrollView>
            <AppButton text="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default AddGuest;

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    paddingTop: hp(4.7),
    paddingVertical: hp(2),
    paddingRight: wp(1.7),
    backgroundColor: "white",
  },
  searchWrapper: {
    paddingHorizontal: wp(5.3),
    marginVertical: hp(2.5),
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: wp(2),
    paddingVertical: hp(1.6),
    paddingHorizontal: wp(4),
    fontSize: wp(4),
  },
  listContainer: {
    flex: 1,
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    fontSize: wp(3.7),
    marginTop: hp(3),
  },
  selectionInfo: {
    alignItems: "center",
    marginBottom: hp(1),
  },
  selectionCount: {
    fontSize: wp(4),
    fontWeight: "500",
    color: "#333",
  },
  initialsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: hp(1),
    gap: wp(2),
  },
  initialCircle: {
    backgroundColor: "#F0534F",
    borderRadius: wp(6),
    width: wp(10),
    height: wp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  initialText: {
    color: "white",
    fontWeight: "bold",
    fontSize: wp(4),
  },
  buttonContainer: {
    paddingHorizontal: wp(5),
    paddingBottom: hp(3),
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "85%",
    borderRadius: 10,
    padding: 20,
    maxHeight: "70%",
  },
  modalTitle: {
    fontSize: wp(5),
    fontWeight: "bold",
    marginBottom: hp(2),
    textAlign: "center",
  },
});
