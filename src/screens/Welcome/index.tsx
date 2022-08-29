import React from "react";

import Logo from "../../assets/logo.svg";
import BannerHome from "../../assets/bannerHome.svg";
import { Button, Flex, Link, Text } from "native-base";

export function Welcome() {
  return (
    <Flex direction="column" align="center" justify="center" p="5">
      <Logo width="100%" />
      <Text color="lime.200" fontSize="xl" textAlign="center">
        Help the world and save at the same time!
      </Text>
      <BannerHome width="100%" height="60%" />
      <Button bg="green.900" w="100%" borderRadius="16px">
        <Text fontSize="xl" fontWeight="500" color="white">
          Login
        </Text>
      </Button>
      <Text color="lime.200" textAlign="center" mt="4">
        Do you not have an account? {"\n"}
        <Link
          _text={{
            color: "lime.200",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          Sign up
        </Link>
      </Text>
    </Flex>
  );
}
