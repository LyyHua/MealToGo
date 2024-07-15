import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

type RestaurantInfoProps = {
  name: string;
  icon?: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily?: boolean;
};

export default function RestaurantInfo({
  restaurant = {} as RestaurantInfoProps,
}) {
  const {
    name = "Ramen",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen,_at_Kasukabe_Station_(2014.05.05)_1.jpg",
    ],
    address = "idk",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;
  return (
    <Card style={styles.card}>
        <Card.Cover key={name} style={styles.cover} source={{ uri: photos[0] }} />
      <Text style={styles.title}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
    card: {backgroundColor: "white"},
    cover: { padding: 20, backgroundColor: "white"},
    title: { padding: 16 },
});
