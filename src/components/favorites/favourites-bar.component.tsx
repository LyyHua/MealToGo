import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../spacer/spacer.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";
import { ThemedText } from "@/components/ThemedText";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;
export const FavouritesBar = ({
  favourites,
  onNavigate,
}: {
  favourites: any;
  onNavigate: any;
}) => {
  console.log(favourites);
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer size="large" position="top">
        <ThemedText type="title">Favourites</ThemedText>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant: any) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("RestaurantDetail", {
                    restaurant,
                  })
                }
              >
                <CompactRestaurantInfo isMap restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
