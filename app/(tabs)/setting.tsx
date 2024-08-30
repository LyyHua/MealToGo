import { SettingsNavigator } from "@/src/infrastructure/navigation/settings.navigator";
import { createStackNavigator } from "@react-navigation/stack";

const Setting = createStackNavigator();

export default function Settings() {
  return (
    <Setting.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Setting.Screen name="Settings" component={SettingsNavigator} />
    </Setting.Navigator>
  );
};
