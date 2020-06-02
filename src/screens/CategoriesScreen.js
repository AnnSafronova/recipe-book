import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { categoryList } from "../sample/categories";
import { CategoryItem } from "../components/CategoryItem";

export const CategoriesScreen = ({ navigation }) => {
  const [categories, setCategories] = useState(categoryList);

  const goToDishes = (categoryId) => {
    navigation.navigate("Dishes", {
      categoryId,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        data={categories}
        renderItem={({ item, index }) => (
          <CategoryItem index={index} category={item} goToDishes={goToDishes} />
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
  },
});
