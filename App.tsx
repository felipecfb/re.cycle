import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";

import { theme } from "./src/styles/theme";
import { Routes } from "./src/routes";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <AuthProvider>
        <StatusBar style="dark" />
        <Routes />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
