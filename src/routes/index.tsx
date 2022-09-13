import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/AuthContext";
import { TabsRoutes } from "./app.tabs.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      { user ? <TabsRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}