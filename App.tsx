import React from "react";
import { Flex, NativeBaseProvider } from "native-base";

import { Welcome } from "./src/screens/Welcome";
import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Flex flex="1" bg="amber.50">
      <Welcome />
      </Flex>
    </NativeBaseProvider>
  );
}
