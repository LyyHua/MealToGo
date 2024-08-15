import { Lato_400Regular } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts } from "@expo-google-fonts/oswald";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { FavouritesContextProvider } from "@/src/services/favorites/favorites.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";
import { RestaurantsNavigator } from "@/src/infrastructure/navigation/restaurants.navigator";
import { LocationContextProvider } from "@/src/services/location/location.context";

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
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <RestaurantsNavigator />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
