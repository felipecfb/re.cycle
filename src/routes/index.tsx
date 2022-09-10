import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../context/AuthContext";
import { TabsRoutes } from "./app.tabs.routes";

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      { user ? <TabsRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}