import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { DishItem } from "../components/DishItem";
import { THEME } from "../theme";

export const DishesScreen = ({ route, navigation }) => {
  const [dishes, setDishes] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const goToDishPage = () => {
    navigation.navigate("DishPage");
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Название блюда..." />
      <FlatList
        keyExtractor={(item) => item.toString()}
        data={dishes}
        renderItem={({ item, index }) => (
          <DishItem index={index} goToDishPage={goToDishPage} />
        )}
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
    width: "100%",
  },
  input: {
    padding: 8,
    paddingBottom: 15,
    paddingLeft: 20,
    width: "100%",
    borderRadius: 5,
    borderBottomWidth: 1,
    fontSize: THEME.STANDARD_TEXT_SIZE,
    borderColor: THEME.GREY_COLOR,
    marginBottom: 1,
  },
});
