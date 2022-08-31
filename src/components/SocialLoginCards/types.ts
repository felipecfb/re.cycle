import { IButtonProps } from "native-base";
import { AntDesign } from "@expo/vector-icons";

export interface ISocialLoginCardsProps extends IButtonProps {
  socialIcon: React.ComponentProps<typeof AntDesign>["name"];
  socialName: string;
  onPress: () => void;
}
