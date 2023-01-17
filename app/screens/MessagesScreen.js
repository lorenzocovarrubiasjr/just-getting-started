import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import UserMiniDisplay from "../components/UserMiniDisplay";

const messages = [
  {
    id: 1,
    title: "Testing this title",
    description: "Testing the description the best that I can",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "Testing this title",
    description: "Testing the description the best that I can",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Testing this title",
    description: "Testing the description the best that I can",
    image: require("../assets/chair.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <UserMiniDisplay
            title={item.title}
            description={item.description}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
