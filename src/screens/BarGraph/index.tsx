import { Flex, Text } from "native-base";
import React from "react";
import { Header } from "@components/Header";

export function BarGraph() {
  return (
    <Flex safeArea>
      <Header />
      <Text>Bar Graph</Text>
    </Flex>
  );
}
