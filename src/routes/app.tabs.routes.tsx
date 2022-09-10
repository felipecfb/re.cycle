import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import React from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { Home } from "../screens";

import { Entypo } from "@expo/vector-icons";

const { Screen, Navigator } = createBottomTabNavigator();

export function TabsRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
        tabBarInactiveBackgroundColor: "transparent",

        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: theme.colors.white,
          position: "absolute",
          bottom: getStatusBarHeight(),
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 60,
          paddingVertical: 5,
          height: 60,
        },
        tabBarActiveTintColor: theme.colors.green[900],
        tabBarInactiveTintColor: theme.colors.lime[200],
        tabBarShowLabel: false,
      })}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
