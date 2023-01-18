import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

import colors from "../config/colors";
import AppIcon from "../components/AppIcon";
import Screen from "../components/Screen";
import ItemSummary from "../components/ItemSummary";
import ListItemSeperator from "../components/ListItemSeperator";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.secondary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

const MyAccountScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Text>MyAccountScreen</Text>
        <ItemSummary
          title="Witeout"
          description="witeoutmysin@gmail.com"
          image={require("../assets/Lorenzo-profile-pic.png")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ItemSummary
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        ></FlatList>
      </View>
      <ItemSummary
        title="Logout"
        IconComponent={
          <AppIcon name="logout" backgroundColor={colors.cardBackground} />
        }
      />
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.cardBackground,
  },
  container: {
    marginVertical: 20,
  },
});
