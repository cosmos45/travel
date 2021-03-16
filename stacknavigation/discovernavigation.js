import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Discover from "../screens/discover";
import Postdetails from "../screens/postDetails";


const Stack = createStackNavigator();

const DiscoverStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Discover" component={Discover} />
      <Stack.Screen name="Postdetails" component={Postdetails} />
    </Stack.Navigator>
  );
};

export { DiscoverStackNavigator };
