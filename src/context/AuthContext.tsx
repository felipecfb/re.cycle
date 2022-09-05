import { createContext, Dispatch, ReactNode, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  email: string;
  password: string;
  setEmail: Dispatch<React.SetStateAction<string>>;
  setPassword: Dispatch<React.SetStateAction<string>>;
  handleCreateUserAccount: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => Alert.alert("Usuário criado com sucesso!"))
      .catch((error: { code: any }) => {
        switch (error.code) {
          case "auth/email-already-in-use":
            Alert.alert(
              "E-mail não disponível. Escolha outro e-mail para cadastrar!"
            );
            break;
          case "auth/invalid-email":
            Alert.alert("E-mail inválido!");
            break;
          case "auth/weak-password":
            Alert.alert("A senha deve ter no mínimo 6 dígitos!");
            break;
        }
      })
      .finally(() => {
        resetForm();
      });
  }

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        setEmail,
        setPassword,
        handleCreateUserAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
