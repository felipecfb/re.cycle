import { Icon, Input as NativeInput } from "native-base";
import React from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";

import { IInputProps } from "./types";

export function Input({ icon, type, placeholder, ...rest }: IInputProps) {
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
