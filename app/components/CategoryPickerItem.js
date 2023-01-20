import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

const CategoryPickerItem = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;

const styles = StyleSheet.create({
  container: {
    //flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: "center",
    alignContent: "center",
    width: "50%",
  },
  label: {
    marginTop: 8,
    textAlign: "center",
  },
});
