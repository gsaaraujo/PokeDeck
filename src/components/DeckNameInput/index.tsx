import React from 'react';

import { Container } from './styles';

type Props = {
  handleInputText: (name: string) => void;
};

export const DeckNameInput = ({ handleInputText }: Props) => {
  return <Container onChangeText={text => handleInputText(text)} />;
};
