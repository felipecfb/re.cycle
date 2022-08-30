import {
  Flex,
  IInputProps as IInputPropsNativeBase,
  Icon,
  Input as NativeInput,
} from "native-base";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface InputProps extends IInputPropsNativeBase {
  icon: React.ComponentProps<typeof AntDesign>["name"];
  type: "text" | "password";
  placeholder: string;
}

export function Input({ icon, type, placeholder, ...rest }: InputProps) {
  return (
    <NativeInput
      InputLeftElement={
        <Icon
          as={<AntDesign name={icon} />}
          mr="2"
          size={7}
          color="green.900"
        />
      }
      variant="underlined"
      type={type}
      placeholder={placeholder}
      fontSize={RFValue(12)}
      color="green.900"
      borderBottomColor="green.900"
      borderBottomWidth={2}
      _focus={{
        borderBottomWidth: 1,
      }}
      {...rest}
    />
  );
}
