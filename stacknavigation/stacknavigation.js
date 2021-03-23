import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Postdetails from "../screens/postDetails";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Postdetails"
          component={Postdetails}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );

}

export {MainStackNavigator}