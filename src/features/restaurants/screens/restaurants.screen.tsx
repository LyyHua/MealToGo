import { SafeAreaView, StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";

export default function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar value={""} />
      </View>
      <View style={styles.list}>
        <RestaurantInfo />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
