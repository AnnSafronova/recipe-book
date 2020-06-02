import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";

export const DishItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dishImage}></View>
      <Text style={styles.dishText}>Индейка лайт - 5 ингридиентов</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: THEME.GREY_COLOR,
    borderRadius: 10,
  },
  dishImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    backgroundColor: "orange",
  },
  dishText: {
    width: "77%",
  },
});
