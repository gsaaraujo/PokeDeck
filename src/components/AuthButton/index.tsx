import React from 'react';

import { Container, Text } from './styles';

type Props = {
  testID?: string;
  text: string;
  handlePressButton: () => void;
};

export const AuthButton = ({ text, testID, handlePressButton }: Props) => {
  return (
    <Container testID={testID} onPress={handlePressButton}>
      <Text>{text}</Text>
    </Container>
  );
};
