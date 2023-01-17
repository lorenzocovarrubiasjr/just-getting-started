import { StyleSheet, View, Image } from "react-native";
import React from "react";

import colors from "../config/colors";
import AppText from "./AppText";

const Card = ({ title, subtitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.cardBackground,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 8,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "700",
  },
});
