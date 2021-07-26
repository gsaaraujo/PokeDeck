import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Alert, Keyboard, Linking } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { ACCESS_TOKEN } from '../../configs/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { theme } from '../../global/styles/theme';
import GoogleSVG from '../../assets/images/google.svg';

import {
  CLIENT_ID,
  RESPONSE_TYPE,
  REDIRECT_URI,
  SCOPE,
} from 'react-native-dotenv';

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

  useEffect(() => {
    handleRedirectUri();
  }, []);

  const { highlight } = theme.colors;
  const { isLoading, handleIsLoading } = useAuth();

  const navigation = useNavigation();
  const { handleDBApi } = useAuth();

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
      handleIsLoading(true);

      try {
        handleDBApi(data);
      } catch (error) {
        Alert.alert(
          'An unexpected error has occurred',
          'Please try again later',
        );
      }
    }
  };

  const handleAuthentication = () => {
    const authUri = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;

    try {
      handleIsLoading(true);
      Linking.openURL(authUri);
    } catch (error) {
      Alert.alert('An unexpected error has occurred', 'Please try again later');
    }
  };

  const handleRedirectUri = () => {
    Linking.addEventListener('url', async ({ url }) => {
      const isAccessAllowed = !url.includes('access_denied');

      if (isAccessAllowed) {
        const regex = /access_token=(.*?)&/;
        const matches = url.match(regex) as RegExpMatchArray;
        const accessToken = matches[1];
        const accessTokenJson = JSON.stringify(accessToken);

        AsyncStorage.setItem(ACCESS_TOKEN, accessTokenJson);

        handleIsLoading(false);
      }
    });
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Title>Sign In</Title>

      <Content>
        <Input
          title='Username'
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
          <AuthButton
            testID='Button.SignIn'
            title='Sign In'
            onPress={handleSignIn}
          />
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
          <Action onPress={handleAuthentication}>
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
