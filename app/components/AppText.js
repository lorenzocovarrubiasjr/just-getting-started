import { Platform, StyleSheet, Text } from "react-native";
import React from "react";

export default function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textTransform: "uppercase",
  },
});
