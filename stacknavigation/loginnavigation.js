import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/profile";
import Login from "../screens/login";
import Home from "../screens/home"


const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
};

export { LoginStackNavigator };
