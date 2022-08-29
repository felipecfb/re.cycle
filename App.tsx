import React from "react";
import { NativeBaseProvider } from "native-base";

import { Home } from "./src/screens/Home";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Home />
    </NativeBaseProvider>
  );
}
