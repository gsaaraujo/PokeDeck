import React from 'react';

import { Container, Text } from './styles';

type Type = {
  id: string;
  type: string;
  color: string;
  borderColor: string;
};

type Props = {
  testID?: string;
  pokeType: Type;
  isSelected: boolean;
  handlePressButton: (typeName: string) => void;
};

export const PokemonTypeFilter = ({
  testID,
  pokeType,
  isSelected = true,
  handlePressButton,
}: Props) => {
  return (
    <Container
      testID={testID}
      color={pokeType.color}
      borderColor={pokeType.borderColor}
      isSelected={isSelected}
      onPress={() => handlePressButton(pokeType.type)}>
      <Text>{pokeType.type}</Text>
    </Container>
  );
};
