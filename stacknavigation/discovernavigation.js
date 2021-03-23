import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Discover from "../screens/discover";
import Guide from "../screens/guides"

const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Guide"
        component={Guide}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { DiscoverStackNavigator };
