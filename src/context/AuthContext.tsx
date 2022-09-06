import { createContext, Dispatch, ReactNode, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextProps {
  name: string;
  email: string;
  password: string;
  setName: Dispatch<React.SetStateAction<string>>;
  setEmail: Dispatch<React.SetStateAction<string>>;
  setPassword: Dispatch<React.SetStateAction<string>>;
  handleCreateUserAccount: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
  }

  function handleCreateUserAccount() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => {
        const userInfo = data.user;
        const userUID = userInfo.uid;
        firestore()
          .collection("users")
          .doc(userUID)
          .set({
            displayName: name,
            email,
          })
          .then(() => Alert.alert("Usuário criado com sucesso!"))
          .catch((error) => {
            console.log(error);
          });
      })
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
        name,
        email,
        password,
        setName,
        setEmail,
        setPassword,
        handleCreateUserAccount,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
