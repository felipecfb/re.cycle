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
  HStack,
} from "native-base";
import { Entypo } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { Input } from "../../components/Input";
import { SocialLoginCards } from "../../components/SocialLoginCards";

export function SignIn() {
  const [show, setShow] = useState(false);

  return (
    <Flex align="center" justify="center" px="5">
      <Heading color="green.900" fontSize={RFValue(24)}>
        Welcome back
      </Heading>
      <Text color="lime.200" fontSize={RFValue(12)} mt="2">
        Sign in to your account
      </Text>
      <FormControl mt="10">
        <Stack space="4">
          <Input type="text" placeholder="Email address" icon="user" />
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
          <Text
            color="green.900"
            fontSize={RFValue(10)}
            textAlign="right"
            textDecorationLine="underline"
          >
            Forgot password?
          </Text>
        </Stack>
        <Button
          mt="5"
          bg="green.900"
          _text={{
            fontSize: RFValue(12),
            fontWeight: "700",
          }}
          _pressed={{
            opacity: 0.8,
            bg: "green.900",
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

      <HStack space={5} maxW="100%" my="5">
        <SocialLoginCards
          socialIcon="github"
          socialName="GitHub"
          onPress={() => {}}
        />
        <SocialLoginCards
          socialIcon="google"
          socialName="Google"
          onPress={() => {}}
        />
      </HStack>

      <Flex textAlign="center" justify="center" align="center" mt="5">
        <Text fontSize={RFValue(12)} color="lime.200">
          You don't have an account?
        </Text>
        <Button
          _text={{
            fontSize: RFValue(12),
            color: "green.900",
            textDecorationLine: "underline",
            fontWeight: 700,
          }}
          bg="transparent"
          _pressed={{
            bg: "transparent",
            opacity: 0.8,
          }}
        >
          Sign up
        </Button>
      </Flex>
    </Flex>
  );
}
