import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo-red.png")}
          style={styles.logo}
        ></Image>
        <AppText style={styles.tagLine}>Sell what you dont need.</AppText>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="Login" color="primary" />
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 125,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    margin: 25,
  },
  buttonsContainer: {
    width: "100%",
    height: 70,
    marginBottom: 100,
  },
});
