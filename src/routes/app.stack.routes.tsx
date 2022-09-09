import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../screens";

export function AppStackRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Welcome'}
    >
      <Screen name="Homepage" component={Home} />
    </Navigator>
  );
}
