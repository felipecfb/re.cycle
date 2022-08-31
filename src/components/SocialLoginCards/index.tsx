import { Button, Flex, HStack, IButtonProps, Icon, Text } from "native-base";

import { AntDesign } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface SocialLoginCardsProps extends IButtonProps {
  socialIcon: React.ComponentProps<typeof AntDesign>["name"];
  socialName: string;
  onPress: () => void;
}

export function SocialLoginCards({
  socialIcon,
  socialName,
  onPress,
  ...rest
}: SocialLoginCardsProps) {
  return (
    <Button p="4" shadow="2" flex="1" onPress={onPress} {...rest}>
      <HStack space={3} display="flex" alignItems="center">
        <Icon as={<AntDesign name={socialIcon} />} color="green.900" size={6} />
        <Text fontSize={RFValue(12)} color="green.900">{socialName}</Text>
      </HStack>
    </Button>
  );
}
