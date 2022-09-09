import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthRoutes } from "./auth.routes";
import { AuthContext } from "../context/AuthContext";
import { AppStackRoutes } from "./app.stack.routes";

export function Routes() {
  const { user } = useContext(AuthContext);

  return (
    <NavigationContainer>
      { user ? <AppStackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}