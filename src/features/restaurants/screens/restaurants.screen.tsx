import { SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

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
