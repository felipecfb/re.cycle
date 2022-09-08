import { Dispatch, ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<React.SetStateAction<string>>;
  setEmail: Dispatch<React.SetStateAction<string>>;
  setPassword: Dispatch<React.SetStateAction<string>>;
  handleCreateUserAccount: () => void;
  signInWithGoogle: () => void;
}

export type IUser = {
  uid: string;
  displayName?: string;
  email: string;
  phoneNumber?: string;
  photoURL?: string;
}
