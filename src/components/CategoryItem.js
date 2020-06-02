import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { THEME } from "../theme";

export const CategoryItem = ({ category, index, goToDishes }) => {
  const checkIndexIsEven = (n) => n % 2 == 0;
  const pressHandler = () => {
    goToDishes(category.id);
  };

  return (
    <View
      style={{
        ...styles.categoryItem,
        ...{
          borderRightWidth: checkIndexIsEven(index) ? 2 : 0,
          borderLeftWidth: checkIndexIsEven(index) ? 0 : 2,
        },
      }}
    >
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.fullSize}
        onPress={pressHandler}
      >
        <View style={styles.categoryNameContainer}>
          <Text style={styles.categoryName}>{category.title}</Text>
        </View>
        <Image style={styles.fullSize} source={category.src} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryItem: {
    width: "50%",
    height: 150,
    borderBottomWidth: 4,
    borderColor: THEME.MAIN_LIGHT_COLOR,
    position: "relative",
  },
  fullSize: {
    width: "100%",
    height: "100%",
  },
  categoryNameContainer: {
    position: "absolute",
    zIndex: 10,
    width: "100%",
    bottom: 0,
    padding: 9,
    backgroundColor: "rgba(41, 36, 36, 0.8)",
  },
  categoryName: {
    fontSize: THEME.STANDARD_TEXT_SIZE,
    color: THEME.MAIN_LIGHT_COLOR,
  },
});
