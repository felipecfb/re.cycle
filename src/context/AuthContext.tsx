import { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AuthContextProps, AuthProviderProps } from "./types";

GoogleSignin.configure({
  scopes: ["profile", "email"],
  webClientId:
    "597414105012-0hdvaei9hpa2ahaitdau7g4jjp5ndj0s.apps.googleusercontent.com",
});

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

  async function signInWithGoogle() {
    const { idToken } = await GoogleSignin.signIn();

    try {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
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
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
