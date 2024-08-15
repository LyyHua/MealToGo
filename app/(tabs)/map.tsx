import { MapScreen } from "@/src/features/map/screens/map.screen";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";
import { createStackNavigator } from "@react-navigation/stack";

const Map = createStackNavigator();

export default function map() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Map.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Map.Screen name="Map" component={MapScreen} />
        </Map.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}
