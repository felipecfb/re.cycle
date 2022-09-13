import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { BarGraph } from "@screens/BarGraph";
import { Profile } from "@screens/Profile";
import { CollectionPoints } from "@screens/CollectionPoints";
import { AllRecycled } from "@screens/AllRecycled";

import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { useTheme } from "native-base";

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
        name="CollectionPoints"
        component={CollectionPoints}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="location-pin" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Bar Graph"
        component={BarGraph}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="bar-graph" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="All Recycled"
        component={AllRecycled}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="recycle" size={24} color={color} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
