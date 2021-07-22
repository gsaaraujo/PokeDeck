import React, { useState } from 'react';
import { Keyboard, ActivityIndicator, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { AuthButton } from '../../components/AuthButton';
import { AuthNavigate } from '../../components/AuthNavigate';
import { RequiredFieldMessage } from '../../components/RequiredFieldMessage';

import { theme } from '../../global/styles/theme';

import { localApi } from '../../services/localDatabaseApi';

import { Container, Title, Content } from './styles';

export const SignUp = () => {
  const { highlight } = theme.colors;
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRequiredFieldMessage, isSetRequiredFieldMessage] = useState(false);

  const navigation = useNavigation();

  const handleUsername = (username: string) => setUsername(username);

  const handleEmail = (email: string) => setEmail(email.toLowerCase());

  const handlePassword = (password: string) => setPassword(password);

  const handleRequiredFieldFilled = () => {
    const emptyFields = !(!!username && !!email && !!password);

    if (emptyFields) {
      isSetRequiredFieldMessage(true);

      return true;
    } else {
      isSetRequiredFieldMessage(false);
      return false;
    }
  };

  const handleSignIn = () => navigation.navigate('SignIn');

  const handleSignUp = async () => {
    const data = { username, email, password };
    const emptyField = handleRequiredFieldFilled();

    if (!emptyField) {
      setIsLoading(true);
      try {
        localApi.post('/user', data);
      } catch (error) {
        Alert.alert(
          'An unexpected error has occurred',
          'Please try again later',
        );
      } finally {
        handleSignIn();
      }
    }
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Title>Sign Up</Title>

      <Content>
        <Input
          title='Username'
          hasText={!!username}
          onChangeText={username => handleUsername(username)}
        />
        <Input
          title='Email'
          hasText={!!email}
          onChangeText={email => handleEmail(email)}
        />
        <Input
          title='Password'
          hasText={!!password}
          onChangeText={password => handlePassword(password)}
          hasIcon
          isShowPassword
        />

        <RequiredFieldMessage isRequiredFieldMessage={isRequiredFieldMessage} />

        {isLoading ? (
          <ActivityIndicator color={highlight} size='large' />
        ) : (
          <AuthButton title='Sign In' onPress={handleSignUp} />
        )}
      </Content>

      <AuthNavigate
        title='Already have an account?'
        highlight='Sign In'
        onPress={handleSignIn}
      />
    </Container>
  );
};
