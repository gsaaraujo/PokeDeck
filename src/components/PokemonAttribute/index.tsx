import React from 'react';

import { theme } from '../../global/styles/theme';

import { Container, Text } from './styles';

type Props = {
  text: string;
  subtext: string[] | number[];
};

export const PokemonAttribute = ({ text, subtext }: Props) => {
  const { textColor100, textColor50 } = theme.colors;

  return (
    <Container>
      <Text color={textColor100} size={16}>
        {text}
      </Text>
      <Text color={textColor50} size={16}>
        {subtext.length == 1 ? subtext : `${subtext[0]}\n${subtext[1]}`}
      </Text>
    </Container>
  );
};
