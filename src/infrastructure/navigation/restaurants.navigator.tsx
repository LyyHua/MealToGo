import { RestaurantDetailScreen } from "@/src/features/restaurants/screens/restaurant-detail.screen";
import { RestaurantsScreen } from "@/src/features/restaurants/screens/restaurants.screen";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};