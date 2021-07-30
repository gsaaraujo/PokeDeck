import React from 'react';

import { Container, Text } from './styles';

type Props = {
  text: string;
  amount: number;
};

export const DeckListHeader = ({ text, amount }: Props) => {
  return (
    <Container>
      <Text size={14}>{text}</Text>
      <Text size={14}>Total {amount}</Text>
    </Container>
  );
};
