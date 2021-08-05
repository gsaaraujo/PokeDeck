import React, { useState, useEffect } from 'react';

import { SvgUri } from 'react-native-svg';

import PokeballNormalSVG from '../../assets/images/pokeballNormal.svg';

import { ModalView } from '../ModalView';
import { UserCard } from '../../context/deck';
import { PokemonDescription } from '../../screens/PokemonDescription';

import {
  pokemonTypesPartOne,
  pokemonTypesPartTwo,
} from '../../utils/pokemonTypes';

import {
  Container,
  BackgroundTypeColor,
  Content,
  Text,
  Overlay,
} from './styles';

type Props = {
  cardInfo: UserCard;
  isSelected: boolean;
  handlePressButton: () => void;
  handleLongPressButton: (cardInfo: UserCard) => void;
};

export const Card = ({
  cardInfo,
  isSelected = false,
  handleLongPressButton,
}: Props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [borderColors, setBorderColors] = useState(['#fff']);
  const [backgroundColors, setBackgroundColors] = useState(['#fff']);

  useEffect(() => {
    handleColorType();
  }, []);

  const handleIsModalVisible = () => setIsModalVisible(!isModalVisible);

  const handleColorType = () => {
    const pokemonTypes = pokemonTypesPartOne.concat(pokemonTypesPartTwo);

    const matchType = pokemonTypes.filter(value =>
      cardInfo.type.includes(value.type),
    );

    if (matchType) {
      let colors: string[] = [];
      let borders: string[] = [];

      matchType.forEach(value => (colors = [...colors, value.color]));
      matchType.forEach(value => (borders = [...borders, value.borderColor]));

      setBackgroundColors(colors);
      setBorderColors(borders);
    }
  };

  return (
    <Container
      borderColor={borderColors.length == 2 ? '#464646' : borderColors[0]}
      onLongPress={() => handleLongPressButton(cardInfo)}
      onPress={handleIsModalVisible}>
      <BackgroundTypeColor backgroundColor={backgroundColors[0]} />
      <BackgroundTypeColor
        backgroundColor={
          backgroundColors.length == 2
            ? backgroundColors[1]
            : backgroundColors[0]
        }
      />

      <Content>
        <Text>{cardInfo.name}</Text>
        <SvgUri uri={cardInfo.picture} width={65} height={65} />
        <Text>{cardInfo.type}</Text>
      </Content>

      {isSelected && (
        <Overlay>
          <PokeballNormalSVG />
        </Overlay>
      )}

      <ModalView visible={isModalVisible}>
        <PokemonDescription
          handleIsModalVisible={handleIsModalVisible}
          cardInfo={cardInfo}
        />
      </ModalView>
    </Container>
  );
};
