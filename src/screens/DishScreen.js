import React, { useState } from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { THEME } from "../theme";
import { IngredientItem } from "../components/IngredientItem";

export const DishScreen = ({ navigation, route }) => {
  const [mode, setMode] = useState(1);
  let content;

  const getMinuteEnding = () => {
    if (route.params.dish === 1) {
      return "а";
    }
    if (route.params.dish < 5) {
      return "ы";
    }
    return "";
  };

  if (mode === 1) {
    content = (
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index.toString()}
        data={route.params.dish.ingredients}
        renderItem={({ item, index }) => (
          <IngredientItem ingredient={item} index={index} />
        )}
      />
    );
  }
  if (mode === 2) {
    content = (
      <FlatList
        style={{ width: "100%" }}
        keyExtractor={(item, index) => index.toString()}
        data={route.params.dish.steps}
        renderItem={({ item }) => (
          <Text style={styles.recipeStep}>
            {item.number}. {item.text}
          </Text>
        )}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.dishImage}
          source={route.params.dish.src}
        />
        <View style={styles.dishDescription}>
          <Text style={styles.dishText}>{route.params.dish.title}</Text>
          <Text style={styles.dishText}>
            {route.params.dish.cookingTime} минут{getMinuteEnding()}
          </Text>
        </View>
      </View>
      <View style={styles.dishControls}>
        <Button
          buttonStyle={{
            ...styles.controlButton,
            ...{
              backgroundColor:
                mode === 1 ? THEME.GREEN_DARK_COLOR : THEME.GREEN_COLOR,
            },
          }}
          containerStyle={styles.controlButtonContainer}
          title="Ингридиенты"
          onPress={() => setMode(1)}
        />
        <Button
          buttonStyle={{
            ...styles.controlButton,
            ...{
              backgroundColor:
                mode === 2 ? THEME.GREEN_DARK_COLOR : THEME.GREEN_COLOR,
            },
          }}
          containerStyle={styles.controlButtonContainer}
          title="Инструкция"
          onPress={() => setMode(2)}
        />
      </View>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageContainer: {
    position: "relative",
    height: "43%",
    width: "100%",
  },
  dishImage: {
    height: "100%",
  },
  dishDescription: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: THEME.DARK_OPACITY_COLOR,
  },
  dishText: {
    fontSize: THEME.LARGE_TEXT_SIZE,
    color: THEME.MAIN_LIGHT_COLOR,
    marginVertical: 4,
  },
  dishControls: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  controlButtonContainer: {
    width: "50%",
    borderRadius: 0,
  },
  controlButton: {
    borderRadius: 0,
    padding: 10,
  },
  recipeStep: {
    fontSize: THEME.STANDARD_TEXT_SIZE,
    color: THEME.GREY_COLOR,
    padding: 5,
    paddingLeft: 15,
  },
});
