import { AccountNavigator } from "@/src/infrastructure/navigation/account.navigator";
import { AuthenticationContext } from "@/src/services/authentication/authentication.context";
import { router } from "expo-router";
import { useContext, useEffect } from "react";

export default function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  useEffect(() => {
    if (isAuthenticated) router.navigate("/(tabs)");
  }, [isAuthenticated]);
  return <AccountNavigator />;
}
