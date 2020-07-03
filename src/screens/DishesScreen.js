import React, { useState } from "react";
import { View, StyleSheet, FlatList, TextInput, Text } from "react-native";
import { DishItem } from "../components/DishItem";
import { THEME } from "../theme";
import { dishList } from "../sample/dishes";

export const DishesScreen = ({ route, navigation }) => {
  const [dishes, setDishes] = useState(
    dishList.filter((dish) => dish.categoryId === route.params.categoryId)
  );

  const goToDishPage = (dish) => {
    navigation.navigate("DishPage", {
      dish,
    });
  };

  const inputHandler = (e) => {
    const query = e.nativeEvent.text.trim();
    const allDishes = dishList.filter(
      (dish) => dish.categoryId === route.params.categoryId
    );
    const leftDishes = allDishes.filter((dish) =>
      dish.title.toLowerCase().match(query.toLowerCase())
    );
    setDishes(leftDishes);
  };

  let content;

  if (dishes.length === 0) {
    content = (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Список блюд пуст</Text>
      </View>
    );
  } else {
    content = (
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={dishes}
        renderItem={({ item, index }) => (
          <DishItem dish={item} index={index} goToDishPage={goToDishPage} />
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Название блюда..."
        onChange={inputHandler}
      />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 10,
    width: "100%",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    color: THEME.MAIN_COLOR,
    fontSize: THEME.LARGE_TEXT_SIZE
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
