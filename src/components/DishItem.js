import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const DishItem = ({ index, dish, goToDishPage }) => {
  const pressHandler = () => {
    goToDishPage(dish);
  };

  const getIngreedientsNumber = () => {
    return dish.ingredients.length;
  };

  const getIngreedientEnding = () => {
    if (dish.ingredients.length === 1) {
      return "";
    }
    if (dish.ingredients.length < 5) {
      return "а";
    }
    return "ов";
  };

  const getIngreedientsList = () => {
    let ingrediensString = "";
    dish.ingredients.forEach((ingredient, index) => {
      if (index < 5) {
        ingrediensString += ingredient.title;
      }
      if (index < 4) {
        ingrediensString += ", ";
      } else if (index < 5) {
        ingrediensString += "..."; 
      }
    });
    return ingrediensString;
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={pressHandler}
        activeOpacity={0.5}
        style={styles.wrapper}
      >
        <Image
          style={styles.dishImage}
          source={dish.src}
        ></Image>
        <View style={styles.dishDescription}>
          <Text style={styles.dishName}>
            {dish.title} - {getIngreedientsNumber()} ингридиент
            {getIngreedientEnding()}
          </Text>
          <View style={styles.dishIngredients}>
            <Text>{getIngreedientsList()}</Text>
          </View>
          <View style={styles.dishAdditional}>
            <Text>0 / {getIngreedientsNumber()}</Text>
            <Text>{dish.cookingTime}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    borderBottomWidth: 1,
    borderColor: THEME.GREY_COLOR,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingBottom: 10,
  },
  dishImage: {
    width: "37%",
    height: 125,
    marginRight: 10,
    backgroundColor: "orange",
  },
  dishDescription: {
    width: "57%",
  },
  dishName: {
    color: THEME.MAIN_COLOR,
    fontWeight: "bold",
    fontSize: THEME.LARGE_TEXT_SIZE,
  },
  dishIngredients: {
    color: THEME.MAIN_COLOR,
  },
  dishAdditional: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "space-between",
  },
});
