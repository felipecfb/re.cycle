import { createContext, Dispatch, ReactNode, useState } from "react";
import auth from "@react-native-firebase/auth";
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

  async function handleCreateUserAccount() {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await user.updateProfile({
        displayName: name,
      });

      Alert.alert("Your account has been created successfully!");
      resetForm();
    } catch (error) {
      switch (error) {
        case "auth/email-already-in-use":
          Alert.alert("Email address already in use!");
          break;
        case "auth/invalid-email":
          Alert.alert("Invalid email address!");
          break;
        case "auth/weak-password":
          Alert.alert("The password must be at least 6 digits long!");
          break;
      }
    }
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
