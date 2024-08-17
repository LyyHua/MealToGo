import { AccountNavigator } from "@/src/infrastructure/navigation/account.navigator";
import { AuthenticationContext } from "@/src/services/authentication/authentication.context";
import { router } from "expo-router";
import { initializeApp } from "firebase/app";
import { useContext, useEffect } from "react";
// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export default function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  useEffect(() => {
    if (isAuthenticated) router.navigate("/(tabs)");
  }, [isAuthenticated]);
  return <AccountNavigator />;
}
