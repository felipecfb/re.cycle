import React, { useState } from "react";
import {
  Flex,
  Heading,
  Icon,
  Text,
  Pressable,
  FormControl,
  Stack,
  Button,
  Divider,
} from "native-base";

import { Input } from "../../components/Input";

import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export function SignIn() {
  const [show, setShow] = useState(false);

  return (
    <Flex align="center" justify="center" px="5">
      <Heading color="green.900" fontSize={RFValue(18)}>
        Welcome back
      </Heading>
      <Text color="lime.200" fontSize={RFValue(10)}>
        SignIn to your account
      </Text>
      <FormControl mt="10">
        <Stack space="4">
          <Input type="text" placeholder="Email adress" icon="user" />
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            icon="unlock"
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={<Entypo name={show ? "eye" : "eye-with-line"} />}
                  size={5}
                  mr="2"
                  color="green.900"
                />
              </Pressable>
            }
          />
          <Text></Text>
        </Stack>
        <Button
          mt="5"
          bg="green.900"
          _text={{
            fontSize: RFValue(12),
            fontWeight: "700",
          }}
        >
          Sign In
        </Button>
      </FormControl>
      <Flex direction="row" align="center" justify="center" mt="5" maxW="35%">
        <Divider thickness={2} bg="green.900" />
        <Text mx="2" color="green.900" fontSize={RFValue(12)}>
          Or Sign In with
        </Text>
        <Divider thickness={2} bg="green.900" />
      </Flex>
    </Flex>
  );
}
