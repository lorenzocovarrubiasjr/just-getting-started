import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppText from "./AppText";

import defaultStyles from "../config/styles";

const ErrorMessage = ({ error, visible }) => {
  if (!visible || !error) return null;
  return <AppText style={styles.error}>{error}</AppText>;
};

export default ErrorMessage;

const styles = StyleSheet.create({
  error: {
    color: defaultStyles.colors.danger,
  },
});
