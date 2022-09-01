import React from "react";
import { NativeBaseProvider } from "native-base";
import { StatusBar } from "expo-status-bar";

import { theme } from "./src/styles/theme";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar style="dark" />
      <Routes />
    </NativeBaseProvider>
  );
}
