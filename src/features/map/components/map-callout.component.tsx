import styled from "styled-components/native";

const MyText = styled.Text``;

export const MapCallout = ({ restaurant }: { restaurant: any }) => (
  <MyText>{restaurant.name}</MyText>
);
