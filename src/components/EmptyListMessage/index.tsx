import React from 'react';

import { Container, Text } from './styles';

type Props = {
  text: string;
};

export const EmptyListMessage = ({ text }: Props) => {
  return (
    <Container>
      <Text>{text}</Text>
    </Container>
  );
};
