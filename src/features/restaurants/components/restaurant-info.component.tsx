import { Image } from "react-native";
import { Title } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/images/star";
import open from "../../../../assets/images/open";
import { Spacer } from "@/src/components/spacer/spacer.component";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  SectionEnd,
  Address,
} from "./restaurant-info.styles";
import { Text } from "@/src/components/typography/text.component";

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
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Shoyu_ramen,_at_Kasukabe_Station_(2014.05.05)_1.jpg",
    ],
    address = "idk",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
