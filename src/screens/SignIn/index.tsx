import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import GoogleSVG from '../../assets/images/google.svg';

import { Input } from '../../components/Input';
import { AuthButton } from '../../components/AuthButton';

import {
  Container,
  Content,
  Title,
  Subtitle,
  Action,
  LineContainer,
  Line,
  LineTitle,
  ActionContainer,
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthNavigate } from '../../components/AuthNavigate';
import { RequiredFieldMessage } from '../../components/RequiredFieldMessage';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRequiredFieldMessage, isSetRequiredFieldMessage] = useState(true);

  const navigation = useNavigation();

  const handleUsername = (username: string) => setUsername(username);

  const handlePassword = (password: string) => setPassword(password);

  const handleRequiredFieldFilled = () =>
    isSetRequiredFieldMessage(!!username && !!password);

  const handleSignUp = () => navigation.navigate('SignUp');

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Title>Sign In</Title>

      <Content>
        <Input
          title='Username or email'
          hasText={!!username}
          maxLength={50}
          onChangeText={username => handleUsername(username)}
        />
        <Input
          title='Password'
          hasText={!!password}
          hasIcon
          isShowPassword
          maxLength={25}
          onChangeText={password => handlePassword(password)}
        />

        <RequiredFieldMessage isRequiredFieldMessage={isRequiredFieldMessage} />

        <AuthButton title='Sign In' onPress={handleRequiredFieldFilled} />

        <Action>
          <Subtitle>Forgot password?</Subtitle>
        </Action>

        <LineContainer>
          <Line />
          <LineTitle>OR</LineTitle>
          <Line />
        </LineContainer>

        <ActionContainer>
          <Action>
            <GoogleSVG />
          </Action>
        </ActionContainer>
      </Content>

      <AuthNavigate
        title="Don't have an account?"
        highlight='Sign Up'
        onPress={handleSignUp}
      />
    </Container>
  );
};
