import { Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: #FFFFFF;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: #FFFFFF;
`;

const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}
