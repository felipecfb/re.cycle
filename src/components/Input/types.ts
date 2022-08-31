import {
  IInputProps as IInputPropsNativeBase,
} from "native-base";
import { AntDesign } from "@expo/vector-icons";

export interface IInputProps extends IInputPropsNativeBase {
  icon: React.ComponentProps<typeof AntDesign>["name"];
  type: "text" | "password";
  placeholder: string;
}