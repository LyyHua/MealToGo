import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import {
  SafeArea,
  SearchContainer,
  RestaurantListContainer,
} from "./restaurants.screen.styles";

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value={""} />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfo />
      </RestaurantListContainer>
    </SafeArea>
  );
}
