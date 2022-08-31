import React from "react";
import { Box, NativeBaseProvider } from "native-base";

import { getStatusBarHeight } from "react-native-iphone-x-helper";

import { Welcome } from "./src/screens/Welcome";
import { SignIn } from "./src/screens/SignIn";
import { SignUp } from "./src/screens/SignUp";

import { theme } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Box
        paddingTop={getStatusBarHeight()}
        paddingX={4}
        flex={1}
        bg="amber.50"
      >
        <SignIn />
      </Box>
    </NativeBaseProvider>
  );
}
