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
} from "native-base";
import { RFValue } from "react-native-responsive-fontsize";

import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from "@expo/vector-icons";
import { Input } from "../../components";


export function SignUp() {
  const [show, setShow] = useState(false);

  return (
    <Flex align="center" justify="center" px="5">
      <Heading color="green.900" fontSize={RFValue(24)}>
        Register
      </Heading>
      <Text color="lime.200" fontSize={RFValue(12)} mt="2">
        Create your account
      </Text>
      <FormControl mt="10">
        <Stack space="10">
          <Input type="text" placeholder="Name" icon={<Icon as={<AntDesign name="user" />} />} />
          <Input type="text" placeholder="Email address" icon={<Icon as={<MaterialCommunityIcons name="email-multiple-outline" />} />} />
          <Input
            type={show ? "text" : "password"}
            placeholder="Password"
            icon={<Icon as={<AntDesign name="unlock" />} />}
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
          Sign Up
        </Button>
      </FormControl>

      <Flex textAlign="center" justify="center" align="center" mt="5">
        <Text fontSize={RFValue(12)} color="lime.200">
          Do you have an account?
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
          Sign in
        </Button>
      </Flex>
    </Flex>
  );
}
