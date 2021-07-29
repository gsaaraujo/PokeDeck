import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

import PikachuSVG from '../../assets/images/pikachu.svg';
import Pokeball from '../../assets/images/pokeball.svg';

import { Container, IconWrapper, DeckInfo, Text, Overlay } from './styles';

type Deck = {
  id: string;
  text: string;
  amountPokemon: number;
};

type Props = {
  deckInfo: Deck;
  isSelected?: boolean;
  handleLongPressDeck: (deckId: string) => void;
};

export const Deck = ({
  deckInfo,
  isSelected = false,
  handleLongPressDeck,
}: Props) => {
  const { textFont100, textFont50 } = theme.fonts;

  return (
    <Container
      style={({ pressed }) => pressed && styles.pressed}
      onLongPress={() => handleLongPressDeck(deckInfo.id)}
      delayLongPress={300}>
      <IconWrapper>
        <PikachuSVG />
      </IconWrapper>

      <DeckInfo>
        <Text font={textFont100} size={16}>
          {deckInfo.text}
        </Text>
        <Text font={textFont50} size={14}>
          {deckInfo.amountPokemon} pokémon
        </Text>
      </DeckInfo>
      {isSelected && (
        <Overlay>
          <Pokeball />
        </Overlay>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  pressed: {
    backgroundColor: 'rgba(1, 1, 1, 0.4)',
  },
});
