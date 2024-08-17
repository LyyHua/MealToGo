import { MapScreen } from "@/src/features/map/screens/map.screen";
import { createStackNavigator } from "@react-navigation/stack";

const Map = createStackNavigator();

export default function map() {
  return (
    <Map.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Map.Screen name="Map" component={MapScreen} />
    </Map.Navigator>
  );
}
