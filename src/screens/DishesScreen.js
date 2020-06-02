import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { DishItem } from "../components/DishItem";
import { THEME } from "../theme";

export const DishesScreen = ({ route }) => {
  const [dishes, setDishes] = useState([1, 2, 3]);

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Название блюда..." />
      <FlatList
        keyExtractor={(item) => item}
        data={dishes}
        renderItem={({ item }) => <DishItem />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
  },
  input: {
    borderColor: THEME.GREY_COLOR,
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 10,
    width: "94%",
    borderRadius: 5,
  },
});
