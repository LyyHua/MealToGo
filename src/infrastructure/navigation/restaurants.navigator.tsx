import { RestaurantsScreen } from "@/src/features/restaurants/screens/restaurants.screen";
import { createStackNavigator } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
    </RestaurantStack.Navigator>
  );
};