import { ThemedText } from "@/components/ThemedText";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="Main"
      component={() => (
        <View>
          <ThemedText>Account Screen</ThemedText>
        </View>
      )}
    />
    <Stack.Screen
      name="Login"
      component={() => (
        <View>
          <ThemedText>Login Screen</ThemedText>
        </View>
      )}
    />
  </Stack.Navigator>
);
