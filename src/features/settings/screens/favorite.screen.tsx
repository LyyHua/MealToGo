import { Spacer } from "@/src/components/spacer/spacer.component";
import { SafeArea } from "@/src/components/utility/safe-area.component";
import { FavouritesContext } from "@/src/services/favorites/favorites.context";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info.component";
import { RestaurantList } from "../../restaurants/screens/restaurants.screen.styles";
import { ThemedText } from "@/components/ThemedText";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }: {navigation: any}) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <RestaurantList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item: any) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <ThemedText>No favourites yet</ThemedText>
    </NoFavouritesArea>
  );
};