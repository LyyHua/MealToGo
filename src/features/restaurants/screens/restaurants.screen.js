import React, { useContext } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import {
  Loading,
  LoadingContainer,
  RestaurantList,
} from "./restaurants.screen.styles";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import { Search } from "../components/search.component";

export const RestaurantsScreen = ( {navigation} ) => {
  const { isLoading, error, restaurants } = useContext(RestaurantsContext);
  console.log(error);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color="#2182BD" />
        </LoadingContainer>
      )}
      <Search />
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
