import { AccountScreen } from "@/src/features/account/screens/account.screen";
import { LoginScreen } from "@/src/features/account/screens/login.screen";
import { RegisterScreen } from "@/src/features/account/screens/register.screen";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="Main" component={AccountScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
