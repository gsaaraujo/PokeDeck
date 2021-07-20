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
  BottomTitle,
  Highlight,
} from './styles';

import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const handleUsername = (username: string) => setUsername(username);

  const handlePassword = (password: string) => setPassword(password);

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
          maxLength={25}
          onChangeText={password => handlePassword(password)}
          secureTextEntry
        />

        <AuthButton title='Sign In' />

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

      <Action onPress={handleSignUp}>
        <BottomTitle>
          Don’t have an account? <Highlight>Sign Up</Highlight>
        </BottomTitle>
      </Action>
    </Container>
  );
};
