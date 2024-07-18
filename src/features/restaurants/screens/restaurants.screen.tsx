import { Searchbar } from "react-native-paper";
import RestaurantInfo from "../components/restaurant-info.component";
import { RestaurantList, SafeArea, SearchContainer } from "./restaurants.screen.styles";
import { Spacer } from "@/src/components/spacer/spacer.component";

export default function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value={""} />
      </SearchContainer>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
        ]}
        renderItem={() => (
          <Spacer position="bottom" size="large">
            <RestaurantInfo />
          </Spacer>
        )}
        keyExtractor={(item: any) => item.name.toString()}
      />
    </SafeArea>
  );
}
