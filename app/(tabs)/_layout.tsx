import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { FavouritesContextProvider } from "@/src/services/favorites/favorites.context";
import { LocationContextProvider } from "@/src/services/location/location.context";
import { RestaurantsContextProvider } from "@/src/services/restaurants/restaurants.context";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tabs
            screenOptions={{
              tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
              headerShown: false,
            }}
          >
            <Tabs.Screen
              name="index"
              options={{
                title: "Restaurant",
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon
                    name={focused ? "restaurant" : "restaurant-outline"}
                    color={color}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="map"
              options={{
                title: "Map",
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon
                    name={focused ? "map" : "map-outline"}
                    color={color}
                  />
                ),
              }}
            />
            <Tabs.Screen
              name="setting"
              options={{
                title: "Setting",
                tabBarIcon: ({ color, focused }) => (
                  <TabBarIcon
                    name={focused ? "settings" : "settings-outline"}
                    color={color}
                  />
                ),
              }}
            />
          </Tabs>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}
