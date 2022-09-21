import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import { Alert } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthContextProps, AuthProviderProps, IUser } from "./types";

GoogleSignin.configure({
  scopes: ["profile", "email"],
  webClientId:
    "597414105012-0hdvaei9hpa2ahaitdau7g4jjp5ndj0s.apps.googleusercontent.com",
});

const USER_COLLECTION = "@recycle:users";

export const AuthContext = createContext({} as AuthContextProps);

function AuthProvider({ children }: AuthProviderProps) {
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

      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: `https://ui-avatars.com/api/?name=${user.displayName}`,
      } as IUser;

      await AsyncStorage.setItem(USER_COLLECTION, JSON.stringify(userData));

      setUser(userData);

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

  async function signInWithEmailAndPassword(email: string, password: string) {
    try {
      setIsLoading(true);
      await auth()
        .signInWithEmailAndPassword(email, password)
        .then((account) => {
          firestore()
            .collection("users")
            .doc(account.user.uid)
            .get()
            .then(async (user) => {
              console.log(user);
              if (user.exists) {
                const userData = {
                  ...user.data(),
                } as IUser;

                setUser(userData);
              }
            })
            .catch((error) => {
              console.log(error);
            });
        });
    } catch (error: any) {
      const { code } = error;

      if (code === "auth/user-not-found" || code === "auth/wrong-password") {
        return Alert.alert("Login", "E-mail e/ou senha inválida.");
      } else return Alert.alert("Login", "Não foi possível realizar o login");
    } finally {
      setIsLoading(false);
    }
  }

  async function signInWithGoogle() {
    const { idToken } = await GoogleSignin.signIn();

    try {
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const { user } = await auth().signInWithCredential(googleCredential);

      const userData = {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL
          ? `https://ui-avatars.com/api/?name=${user.displayName}`
          : user.photoURL,
      } as IUser;

      setUser(userData);
    } catch (error) {
      console.log(error);
    }
  }

  async function loadUserStorageData() {
    setIsLoading(true);

    const storedUser = await AsyncStorage.getItem(USER_COLLECTION);

    if (storedUser) {
      const userData = JSON.parse(storedUser) as IUser;
      console.log(userData);
      setUser(userData);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    loadUserStorageData();
  });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        signInWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
