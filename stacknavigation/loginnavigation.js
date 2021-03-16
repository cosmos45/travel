import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/profile";
import Login from "../screens/login"


const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export { LoginStackNavigator };
