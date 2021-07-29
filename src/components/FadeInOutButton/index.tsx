import React from 'react';

import { Container, Text } from './styles';

type Props = {
  text: string;
  isAlignRight?: boolean;
  handlePressButton: () => void;
};

export const FadeInOutButton = ({
  text,
  isAlignRight = false,
  handlePressButton,
}: Props) => {
  return (
    <Container onPress={handlePressButton} align={isAlignRight}>
      <Text>{text}</Text>
    </Container>
  );
};
