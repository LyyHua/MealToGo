import { FavouritesContext } from "@/src/services/favorites/favorites.context";
import { AntDesign } from "@expo/vector-icons";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }: { restaurant: any }) => {
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouritesContext);
  const isFavourite = favourites.find(
    (r: any) => r.placeId === restaurant.placeId
  );
  return (
    <FavouriteButton
      onPress={() =>
        !isFavourite
          ? addToFavourites(restaurant)
          : removeFromFavourites(restaurant)
      }
    >
      <AntDesign
        name={isFavourite ? "heart" : "hearto"}
        size={24}
        color={isFavourite ? "red" : "white"}
      />
    </FavouriteButton>
  );
};
