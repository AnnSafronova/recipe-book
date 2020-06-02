import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoriesScreen } from "./src/screens/CategoriesScreen";
import { DishesScreen } from "./src/screens/DishesScreen";
import { DishScreen } from "./src/screens/DishScreen";
import { THEME } from "./src/theme";

const Stack = createStackNavigator();

export default function App() {
  const headerOptions = {
    headerStyle: {
      backgroundColor: THEME.MAIN_COLOR,
    },
    headerTintColor: THEME.MAIN_LIGHT_COLOR,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{ ...headerOptions, title: "Категории" }}
        />
        <Stack.Screen
          name="Dishes"
          component={DishesScreen}
          options={{ ...headerOptions, title: "Список блюд" }}
        />
        <Stack.Screen
          name="DishPage"
          component={DishScreen}
          options={{ ...headerOptions, title: "Блюдо" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
