import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import AppText from "./AppText";

const UserMiniDisplay = ({ title, description, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText>{description}</AppText>
      </View>
    </View>
  );
};

export default UserMiniDisplay;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    alignContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  details: {
    paddingLeft: 12,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
