import React from 'react';

import { Container, Text } from './styles';

type Props = {
  testID?: string;
  text: string;
  handlePressButton: () => void;
};

export const AuthButton = ({ text, handlePressButton }: Props) => {
  return (
    <Container onPress={handlePressButton}>
      <Text>{text}</Text>
    </Container>
  );
};
