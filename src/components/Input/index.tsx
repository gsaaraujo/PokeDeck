import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { theme } from '../../global/styles/theme';

import { Container } from './styles';

type Props = TextInputProps & {
  title: string;
  hasText: boolean;
};

export const Input = ({ title, hasText, ...rest }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { highlight, placeholder } = theme.colors;

  const handleIsFocused = () => setIsFocused(!isFocused);
  const handleIsFilled = (inputText: boolean) => {
    setIsFocused(!isFocused);

    return setIsFilled(inputText);
  };

  return (
    <Container
      placeholder={title}
      color={isFocused || isFilled ? highlight : placeholder}
      onFocus={handleIsFocused}
      onBlur={() => handleIsFilled(hasText)}
      {...rest}>
      <></>
    </Container>
  );
};
