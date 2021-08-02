import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styles';

type Props = TextInputProps & {
  handleInputText: (name: string) => void;
};

export const DeckNameInput = ({ handleInputText, ...rest }: Props) => {
  return <Container onChangeText={text => handleInputText(text)} {...rest} />;
};
