import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";
import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";

export default function Index() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar value={""} />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
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
