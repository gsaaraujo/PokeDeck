import React from 'react';

import { Container, Text, Highlight } from './styles';

type Props = {
  text: string;
  highlight: string;
  handlePressButton: () => void;
};

export const AuthNavigate = ({ text, highlight, handlePressButton }: Props) => {
  return (
    <Container onPress={handlePressButton}>
      <Text>
        {text} <Highlight>{highlight}</Highlight>
      </Text>
    </Container>
  );
};
