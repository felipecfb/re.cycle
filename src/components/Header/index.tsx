import React, { useContext } from "react";
import { Avatar, Box, Flex, Icon, Text } from "native-base";

import { Entypo } from "@expo/vector-icons";

import Logo from "../../assets/logo.svg";
import { RFValue } from "react-native-responsive-fontsize";

export function Header() {
  return (
    <Flex
      bg="white"
      direction="row"
      align="center"
      justify="space-between"
      p="5"
    >
      <Icon as={<Entypo name="menu" />} color="green.900" size={10} />

      <Logo width={200} height={50} />
    </Flex>
  );
}
