import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { TabsRoutes } from "./app.tabs.routes";

import { useAuth } from "@hooks/AuthContext";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user ? <TabsRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
