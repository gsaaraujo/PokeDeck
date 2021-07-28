import React from 'react';
import { StyleSheet, PressableProps } from 'react-native';

import { theme } from '../../global/styles/theme';

import PikachuSVG from '../../assets/images/pikachu.svg';
import Pokeball from '../../assets/images/pokeball.svg';

import { Container, IconWrapper, DeckInfo, Text, Overlay } from './styles';

type Props = PressableProps & {
  text: string;
  pokemonAmount: number;
  isSelected?: boolean;
};

export const Deck = ({
  text,
  pokemonAmount,
  isSelected = false,
  ...rest
}: Props) => {
  const { textFont100, textFont50 } = theme.fonts;

  return (
    <Container style={({ pressed }) => pressed && styles.pressed} {...rest}>
      <IconWrapper>
        <PikachuSVG />
      </IconWrapper>

      <DeckInfo>
        <Text font={textFont100} size={16}>
          {text}
        </Text>
        <Text font={textFont50} size={14}>
          {pokemonAmount} pokémon
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
