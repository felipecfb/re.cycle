import { createContext, useCallback, useEffect, useState } from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { AuthContextProps, AuthProviderProps, IUser } from "./types";

GoogleSignin.configure({
  scopes: ["profile", "email"],
  webClientId:
    "597414105012-0hdvaei9hpa2ahaitdau7g4jjp5ndj0s.apps.googleusercontent.com",
});

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  async function signUpWithEmailAndPassword(
    name: string,
    email: string,
    password: string
  ) {
    try {
      setIsLoading(true);
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password
      );

      await firestore().collection("users").doc(user?.uid).set({
        email,
        name,
      });

      await auth().currentUser?.updateProfile({
        displayName: name,
      });

      setUser({ ...user, displayName: name, email });

      Alert.alert("Your account has been created successfully!");

      setIsLoading(false);
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

      setUser({
        uid: user.uid,
        displayName: user.displayName!,
        email: user.email!,
      });
    } catch (error) {
      console.log(error);
    }
  }

  const onAuthStateChanged = useCallback((): void => {
    if (user) {
      setUser(user);
    }

    if (initializing) setInitializing(false);
  }, [initializing]);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, [onAuthStateChanged]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signUpWithEmailAndPassword,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
