import { theme } from "@/constants/Index";
import { RestaurantsScreen } from "@/src/features/restaurants/screens/restaurants.screen";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";
import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { ThemeProvider } from "styled-components/native";

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
            <RestaurantsScreen />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
