import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Music", value: 3 },
];

export default function App() {
  return (
    <Screen style={styles.container}>
      <ListingEditScreen />
      {/* // <AppTextInput placeholder="Placeholder here." icon="email"></AppTextInput>
      // <AppPicker
      //   items={categories}
      //   selectedItem={category}
      //   onSelectItem={(item) => setCategory(item)}
      //   placeholder="Categories"
      //   icon="apps"
      // /> */}
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
