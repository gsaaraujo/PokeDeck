import React, { useState } from 'react';
import { Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { AuthButton } from '../../components/AuthButton';
import { AuthNavigate } from '../../components/AuthNavigate';
import { RequiredFieldMessage } from '../../components/RequiredFieldMessage';

import { Container, Title, Content } from './styles';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRequiredFieldMessage, isSetRequiredFieldMessage] = useState(true);

  const navigation = useNavigation();

  const handleUsername = (username: string) => setUsername(username);

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

  const handleRequiredFieldFilled = () =>
    isSetRequiredFieldMessage(!!username && !!email && !!password);

  const handleSignUp = () => navigation.navigate('SignIn');

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

        <AuthButton title='Sign In' onPress={handleRequiredFieldFilled} />
      </Content>

      <AuthNavigate
        title='Already have an account?'
        highlight='Sign In'
        onPress={handleSignUp}
      />
    </Container>
  );
};
