import React from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import AppText from "./AppText";
import colors from "../config/colors";

const ItemSummary = ({
  title,
  description,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.accent} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.details}>
              <AppText style={styles.title}>{title}</AppText>
              {description && <AppText>{description}</AppText>}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ItemSummary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    backgroundColor: colors.whiteBackground,
    paddingHorizontal: 20,
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
