import { Dispatch, ReactNode } from "react";

export interface AuthProviderProps {
  children: ReactNode;
}

export interface AuthContextProps {
  user: IUser | null;
  isLoading: boolean;
  signUpWithEmailAndPassword: (
    name: string,
    email: string,
    password: string
  ) => void;
  signInWithGoogle: () => void;
}

export type IUser = {
  uid: string;
  displayName?: string;
  email: string;
};
