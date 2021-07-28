import React from 'react';

import { Container, Text } from './styles';

type Props = {
  text: string;
  subtext: string;
};

export const DeckListHeader = ({ text, subtext }: Props) => {
  return (
    <Container>
      <Text size={14}>{text}</Text>
      <Text size={14}>{subtext}</Text>
    </Container>
  );
};
