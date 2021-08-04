import React from 'react';

import { Container, Text } from './styles';

type Type = {
  id: string;
  type: string;
  color: string;
  borderColor: string;
};

type Props = {
  pokeType: Type;
  isSelected: boolean;
  handlePressButton: (typeName: string) => void;
};

export const PokemonTypeFilter = ({
  pokeType,
  isSelected = true,
  handlePressButton,
}: Props) => {
  return (
    <Container
      color={pokeType.color}
      borderColor={pokeType.borderColor}
      isSelected={isSelected}
      onPress={() => handlePressButton(pokeType.type)}>
      <Text>{pokeType.type}</Text>
    </Container>
  );
};
