import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { Formik } from "formik";
import * as Yup from "yup";

import defaultStyles from "../config/styles";
import AppText from "../components/AppText";
const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(5).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <AppTextInput
              icon="email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="Email"
              textContentType="emailAddress"
              onChangeText={handleChange("email")}
            />
            <AppText style={styles.errors}>{errors.email}</AppText>
            <AppTextInput
              icon="lock"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              placeholder="Password"
              textContentType="password"
              onChangeText={handleChange("password")}
            />
            <AppText style={styles.errors}>{errors.password}</AppText>
            <AppButton
              title="Login"
              color={defaultStyles.colors.accent}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginVertical: 20,
  },
  errors: {
    color: defaultStyles.colors.danger,
  },
});
