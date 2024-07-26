import React, { useContext } from "react";
import { Searchbar } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  RestaurantList,
  SafeArea,
  SearchContainer,
} from "./restaurants.screen.styles";
import { RestaurantInfoCard } from "../components/restaurant-info.component";

export const RestaurantsScreen = () => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar value="" />
      </SearchContainer>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
