import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { THEME } from "../theme";

export const DishItem = ({ index }) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.dishImage}
          source={require("../../assets/dish_1.jpg")}
        ></Image>
        <View style={styles.dishDescription}>
          <Text style={styles.dishName}>Индейка лайт - 5 ингридиентов</Text>
          <Text style={styles.dishIngredients}>
            Любовь, макороны, помидоры, огурцы, я тебя люблю, а ты *****
          </Text>
          <View style={styles.dishAdditional}>
            <Text>0 / 11</Text>
            <Text>20</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexGrow: 1,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: THEME.GREY_COLOR,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  dishImage: {
    width: "35%",
    height: 120,
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
