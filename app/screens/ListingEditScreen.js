import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import * as Yup from "yup";

import defaultStyles from "../config/styles";

import { AppForm, AppFormField, SubmitButton } from "../components/Forms";
import AppFormPicker from "../components/Forms/AppFormPicker";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(1000000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const categories = [
  { label: "Clothing", value: 1 },
  { label: "Furniture", value: 2 },
  { label: "Music", value: 3 },
  { label: "Books", value: 4 },
];

const ListingEditScreen = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/logo-red.png")}
      ></Image>

      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="title"
          icon="tag"
          maxLenght={30}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
          textContentType="title"
        />
        <AppFormField
          name="price"
          icon="currency-usd"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          textContentType="price"
          keyboardType="numeric"
        />
        <AppFormPicker
          name="category"
          items={categories}
          placeholder="Category"
          icon="apps"
        />
        <AppFormField
          name="description"
          multiline
          icon="image-text"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
          textContentType="description"
        />

        <SubmitButton title="Update" color={defaultStyles.colors.accent} />
      </AppForm>
    </Screen>
  );
};

export default ListingEditScreen;

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
});
