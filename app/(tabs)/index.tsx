import { theme } from "@/constants/Index";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsNavigator } from "@/src/infrastructure/navigation/restaurants.navigator";
import { initializeApp } from "firebase/app";
import { AuthenticationContextProvider } from "@/src/services/authentication/authentication.context";
import { FavouritesContextProvider } from "@/src/services/favorites/favorites.context";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
// eslint-disable-next-line import/no-unresolved
} from "@env";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

export default function Root() {
  const [oswaldLoaded] = useFonts({
    Oswald_400Regular,
  });
  const [ladoLoader] = useFonts({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !ladoLoader) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavouritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <RestaurantsNavigator />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavouritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
