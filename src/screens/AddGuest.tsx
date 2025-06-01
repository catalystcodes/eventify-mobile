import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, View, FlatList, Text } from "react-native";
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

const AddGuest = () => {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);

  const navigation = useNavigation<any>();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === "granted") {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });

        if (data.length > 0) {
          setContacts(data);
        }
      }
    })();
  }, []);

  const renderContact = ({ item }: { item: Contacts.Contact }) => {
    const phone = item.phoneNumbers?.[0]?.number ?? "No number";

    return (
      <View style={{ paddingVertical: 8 }}>
        <Text style={{ fontSize: 16 }}>
          {item.name} - {phone}
        </Text>
      </View>
    );
  };

  return (
    <View>
      <View
        style={{
          paddingTop: hp(4.7),
          paddingVertical: hp(2),
          backgroundColor: "white",
          paddingRight: wp(1.7),
        }}
      >
        <PageHeader title="4 of 5: Add Guests">
          <Pressable onPress={() => navigation.navigate("createContact")}>
            <AddContact />
          </Pressable>
        </PageHeader>
      </View>
      <ProgressGauge currentPhase={4} totalPhases={5} />
      <View style={{ backgroundColor: "red", flexGrow: 1 }}>
        <View>
          <FlatList
            data={contacts}
            keyExtractor={(item): any => item.id}
            renderItem={renderContact}
            ListEmptyComponent={<Text>No contacts found.</Text>}
          />
        </View>
        <View style={{ marginBottom: hp(2.5) }}>
          <AppButton
            text="Next: Review & Send"
            onPress={() => {
              navigation.navigate("reviewAndSend");
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AddGuest;
