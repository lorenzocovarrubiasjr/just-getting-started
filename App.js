import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";

const categories = [
  { label: "Clothing", value: 1, backgroundColor: "red", icon: "apps" },
  { label: "Furniture", value: 2, backgroundColor: "blue", icon: "email" },
  { label: "Music", value: 3, backgroundColor: "yellow", icon: "lock" },
];

export default function App() {
  return (
    <Screen style={styles.container}>
      <ListingEditScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
