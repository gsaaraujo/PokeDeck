import React, { useState, useEffect } from 'react';
import { TextInputProps } from 'react-native';

import { theme } from '../../global/styles/theme';

import EyeOnSVG from '../../assets/images/eye.svg';
import EyeOffSVG from '../../assets/images/eye-off.svg';

import { Container, TextInput, IconWrapper } from './styles';

type Props = TextInputProps & {
  text: string;
  hasText: boolean;
  hasIcon?: boolean;
  isShowPassword?: boolean;
};

export const UserInfoInput = ({
  text,
  hasText,
  hasIcon = false,
  isShowPassword = false,
  ...rest
}: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isEyeOn, setIsEyeOn] = useState(true);

  useEffect(() => {
    setIsEyeOn(isShowPassword);
  }, []);

  const { highlight, placeholder } = theme.colors;

  const handleIsFocused = () => setIsFocused(!isFocused);

  const handleIsFilled = (inputText: boolean) => {
    setIsFocused(!isFocused);

    return setIsFilled(inputText);
  };

  const handleIsEyeOn = () => setIsEyeOn(!isEyeOn);

  return (
    <Container>
      <TextInput
        placeholder={text}
        color={isFocused || isFilled ? highlight : placeholder}
        onFocus={handleIsFocused}
        onBlur={() => handleIsFilled(hasText)}
        secureTextEntry={isEyeOn}
        {...rest}
      />
      {hasIcon && (
        <IconWrapper onPress={handleIsEyeOn}>
          {isEyeOn ? <EyeOffSVG /> : <EyeOnSVG />}
        </IconWrapper>
      )}
    </Container>
  );
};
