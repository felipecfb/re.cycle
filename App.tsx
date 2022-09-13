import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";

import { Routes } from "./src/routes";

import { AuthProvider } from "@hooks/auth";

import { theme } from "@styles/theme";

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
