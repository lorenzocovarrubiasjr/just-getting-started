import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, { top: 50, left: 30 }]}>
        <MaterialCommunityIcons name="close" size={35} />
      </View>
      <View style={[styles.icon, { top: 50, right: 30 }]}>
        <MaterialCommunityIcons name="delete" size={35} />
      </View>
      <Image
        style={styles.image}
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  icon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  font: {
    color: colors.font,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
