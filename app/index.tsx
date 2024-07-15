import RestaurantsScreen from "@/src/features/restaurants/screens/restaurants.screen";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function Root() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
