import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Profile from "../screens/profile";
import Registration from "../screens/Registration";
import SigninScreen from "../screens/SigninScreen";


const Stack = createStackNavigator();

const LoginStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { LoginStackNavigator };
