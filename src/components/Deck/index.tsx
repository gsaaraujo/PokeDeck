import React from 'react';
import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

import Pokeball from '../../assets/images/pokeball.svg';
import PikachuSVG from '../../assets/images/pikachu.svg';

import { UserDeck } from '../../context/deck';

import { Container, IconWrapper, DeckInfo, Text, Overlay } from './styles';

type Props = {
  deckInfo: UserDeck;
  isSelected?: boolean;
  handlePressDeck: (deckId: string, deckName: string) => void;
  handleLongPressDeck: (deckId: string) => void;
};

export const Deck = ({
  deckInfo,
  isSelected = false,
  handlePressDeck,
  handleLongPressDeck,
}: Props) => {
  const { textFont100, textFont50 } = theme.fonts;

  return (
    <Container
      style={({ pressed }) => pressed && styles.pressed}
      onLongPress={() => handleLongPressDeck(deckInfo.id)}
      onPress={() => handlePressDeck(deckInfo.id, deckInfo.name)}
      delayLongPress={300}>
      <IconWrapper>
        <PikachuSVG />
      </IconWrapper>

      <DeckInfo>
        <Text font={textFont100} size={16}>
          {deckInfo.name}
        </Text>
        <Text font={textFont50} size={14}>
          {deckInfo.cards.length} pokémon
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
