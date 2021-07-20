import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import { Input } from '../../components/Input';
import { AuthButton } from '../../components/AuthButton';
import { AuthNavigate } from '../../components/AuthNavigate';

import { Container, Title, Content } from './styles';

export const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  const handleUsername = (username: string) => setUsername(username);

  const handleEmail = (email: string) => setEmail(email);

  const handlePassword = (password: string) => setPassword(password);

  const handleConfirmPassword = (confirmPassword: string) =>
    setConfirmPassword(confirmPassword);

  const handleSignUp = () => navigation.navigate('SignIn');

  return (
    <Container>
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
        />
        <Input
          title='Confirm password'
          hasText={!!confirmPassword}
          onChangeText={confirmPassword =>
            handleConfirmPassword(confirmPassword)
          }
        />

        <AuthButton title='Sign Up' />
      </Content>

      <AuthNavigate
        title='Already have an account?'
        highlight='Sign In'
        onPress={handleSignUp}
      />
    </Container>
  );
};
