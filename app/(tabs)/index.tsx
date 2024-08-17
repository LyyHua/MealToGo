import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { RestaurantsNavigator } from "@/src/infrastructure/navigation/restaurants.navigator";

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
      <RestaurantsNavigator />
      <ExpoStatusBar style="auto" />
    </>
  );
}
