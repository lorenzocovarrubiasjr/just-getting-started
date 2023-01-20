import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ItemSummary from "../components/ItemSummary";
import Screen from "../components/Screen";
import ListItemSeperator from "../components/ListItemSeperator";
import ItemSummaryDeleteAction from "../components/ItemSummaryDeleteAction";

const messages = [
  {
    id: 1,
    title: "Testing this title",
    description: "Testing the description the best that I can",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title:
      "Testing this title Testing this title Testing this title Testing this title",
    description: "Testing the description the best that I can",
    image: require("../assets/couch.jpg"),
  },
  {
    id: 3,
    title: "Testing this title",
    description:
      "Testing the description the best that I can Testing the description the best that I can Testing the description the best that I can Testing the description the best that I can Testing the description the best that I can Testing the description the best that I can",
    image: require("../assets/chair.jpg"),
  },
];

const MessagesScreen = () => {
  const [items, setItems] = useState(messages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = ({ id }) => {
    console.log();
    setItems(items.filter((_item) => _item.id !== id));
  };

  const handleRefresh = () => {
    console.log("Refreshing");
    setRefreshing(true);
    setItems([messages[2]]);
    setRefreshing(false);
  };

  return (
    <Screen>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemSummary
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log("Message Selected: ", item.title)}
            renderRightActions={() => (
              <ItemSummaryDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    </Screen>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
