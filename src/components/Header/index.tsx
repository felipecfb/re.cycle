import React from "react";
import { Avatar, Flex, Text } from "native-base";

import { RFValue } from "react-native-responsive-fontsize";
import { useAuth } from "../../hooks/AuthContext";

export function Header() {
  const { user } = useAuth();

  return (
    <Flex
      bg="white"
      direction="row"
      align="center"
      justify="space-between"
      p="7"
      borderBottomLeftRadius="30px"
      borderBottomRightRadius="30px"
    >
      <Text fontSize={RFValue(16)}>
        Hi,
        <Text color="green.900" fontWeight="700">
          {" "}
          {user?.displayName}
        </Text>
      </Text>
      <Avatar
        source={{
          uri: user?.photoURL,
        }}
      />
    </Flex>
  );
}
