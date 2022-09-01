import React from "react";
import { Button, Flex, Link, Text } from "native-base";

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import BannerHome from "../../assets/bannerHome.svg";
import Logo from "../../assets/logo.svg";

export function Welcome() {
  const navigation = useNavigation<NavigationProp<ParamListBase>>();

  return (
    <Flex direction="column" align="center" justify="center" p="5">
      <Logo width="100%" />
      <Text color="lime.200" fontSize="xl" textAlign="center">
        Help the world and save at the same time!
      </Text>
      <BannerHome width="100%" height="60%" />
      <Button bg="green.900" w="100%" borderRadius="16px">
        <Text
          fontSize="xl"
          fontWeight="500"
          color="white"
          onPress={() => navigation.navigate("SignIn")}
        >
          Login
        </Text>
      </Button>
      <Text fontSize={RFValue(12)} color="lime.200" textAlign="center" mt="4">
        Do you not have an account? {"\n"}
        <Text
          color="lime.200"
          fontWeight="700"
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign up
        </Text>
      </Text>
    </Flex>
  );
}
