import { CompactRestaurantInfo } from "@/src/components/restaurant/compact-restaurant-info.component";

export const MapCallout = ({ restaurant }: { restaurant: any }) => (
  <CompactRestaurantInfo isMap restaurant={restaurant} />
);
