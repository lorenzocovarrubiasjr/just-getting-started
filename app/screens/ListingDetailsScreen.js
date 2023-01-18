import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ItemSummary from "../components/ItemSummary";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/chair.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>White Couch</AppText>
        <AppText style={styles.price}>$250</AppText>
        <ItemSummary
          title="Witeout"
          description="29 Listings"
          image={require("../assets/Lorenzo-profile-pic.png")}
        />
      </View>
    </View>
  );
};

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  detailsContainer: {
    padding: 24,
    marginVertical: 12,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 24,
  },
});
