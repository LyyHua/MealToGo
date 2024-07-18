import styled from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "marginTop",
  left: "marginLeft",
  right: "marginRight",
  bottom: "marginBottom",
};

type Size = 'small' | 'medium' | 'large';
type Position = 'top' | 'bottom' | 'left' | 'right';

const getVariant = ({ position, size, theme }: { position: Position, size: Size, theme: any}) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];
  return `${property}:${value}`;
};

export const Spacer = styled.View<{ position: Position, size: Size, theme: any }>`
  ${({ position, size, theme }) => getVariant({ position, size, theme })}
`;

Spacer.defaultProps = {
  position: "top",
  size: "small",
};
