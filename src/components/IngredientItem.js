import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";

export const IngredientItem = ({ ingredient }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ingredient.title}</Text>
      <Text style={styles.text}>{ingredient.amount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.GREY_COLOR,
  },
  text: {
    fontSize: THEME.STANDARD_TEXT_SIZE,
    color: THEME.GREY_COLOR,
  },
});
