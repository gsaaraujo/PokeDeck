import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { theme } from '../../global/styles/theme';
import GoogleSVG from '../../assets/images/google.svg';

import { databaseApi } from '../../services/databaseApi';

import { useAuth } from '../../hooks/useAuth';

import { Input } from '../../components/Input';
import { AuthButton } from '../../components/AuthButton';
import { AuthNavigate } from '../../components/AuthNavigate';
import { RequiredFieldMessage } from '../../components/RequiredFieldMessage';

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

export const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRequiredFieldMessage, isSetRequiredFieldMessage] = useState(false);

  const { highlight } = theme.colors;
  const { isLoading, setIsLoading } = useAuth();

  const navigation = useNavigation();
  const { handleLocalDBApi } = useAuth();

  const handleUsername = (username: string) => setUsername(username);

  const handlePassword = (password: string) => setPassword(password);

  const handleRequiredFieldFilled = () => {
    const emptyFields = !(!!username && !!password);

    if (emptyFields) {
      isSetRequiredFieldMessage(true);

      return true;
    } else {
      isSetRequiredFieldMessage(false);
      return false;
    }
  };

  const handleSignUp = () => navigation.navigate('SignUp');

  const handleSignIn = () => {
    const data = { username, password };
    const emptyField = handleRequiredFieldFilled();

    if (!emptyField) {
      setIsLoading(true);

      try {
        handleLocalDBApi(data);
      } catch (error) {
        Alert.alert(
          'An unexpected error has occurred',
          'Please try again later',
        );
      }
    }
  };

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

        {isLoading ? (
          <ActivityIndicator color={highlight} size='large' />
        ) : (
          <AuthButton title='Sign In' onPress={handleSignIn} />
        )}

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
