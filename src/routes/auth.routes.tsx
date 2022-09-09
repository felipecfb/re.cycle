import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn, SignUp, Welcome } from "../screens";

export function AuthRoutes() {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'Welcome'}
    >
      <Screen name="Welcome" component={Welcome} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
    </Navigator>
  );
}
