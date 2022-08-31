import { ReactNode } from "react";
import {
  IInputProps as IInputPropsNativeBase,
} from "native-base";

export interface IInputProps extends IInputPropsNativeBase {
  icon: ReactNode;
  type: "text" | "password";
  placeholder: string;
}