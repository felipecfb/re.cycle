import { Button, HStack, Icon, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

import { ISocialLoginCardsProps } from "./types";

export function SocialLoginCards({
  socialIcon,
  socialName,
  onPress,
  ...rest
}: ISocialLoginCardsProps) {
  return (
    <Button p="4" shadow="2" flex="1" bg="white" onPress={onPress} {...rest}>
      <HStack space={3} display="flex" alignItems="center">
        <Icon as={<AntDesign name={socialIcon} />} color="green.900" size={6} />
        <Text fontSize={RFValue(12)} color="green.900">
          {socialName}
        </Text>
      </HStack>
    </Button>
  );
}
