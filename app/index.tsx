import { theme } from "@/constants/Index";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components/native";
import { RestaurantsNavigator } from "@/src/infrastructure/navigation/restaurants.navigator";
import { initializeApp } from "firebase/app";
import { config } from 'dotenv';

config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

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
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <RestaurantsNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
