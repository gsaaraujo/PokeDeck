import React from 'react';

import '@testing-library/jest-native/extend-expect';

import { render, fireEvent } from '@testing-library/react-native';

import { SignUp } from '.';

jest.mock('@react-navigation/native');

it('should show error message for empty field', () => {
  const { getByText, getByTestId, getByPlaceholderText } = render(<SignUp />);
  const signUpButton = getByTestId('Button.SignUp');

  const userName = getByPlaceholderText('Username');
  const email = getByPlaceholderText('Email');
  const password = getByPlaceholderText('Password');

  expect(userName).toBeTruthy();
  expect(email).toBeTruthy();
  expect(password).toBeTruthy();

  fireEvent.press(signUpButton);

  const errorMessage = getByText('* Please all fields are required');
  expect(errorMessage).toBeTruthy();
});

it('should change placeholder color when field is focused or blured', () => {
  const { getByPlaceholderText } = render(<SignUp />);
  const usernameField = getByPlaceholderText('Username');
  const emailField = getByPlaceholderText('Email');
  const passwordField = getByPlaceholderText('Password');

  fireEvent(usernameField, 'focus');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(usernameField, 'blur');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#A8B3E9',
  });

  fireEvent(emailField, 'focus');

  expect(emailField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(emailField, 'blur');

  expect(emailField).toHaveStyle({
    borderBottomColor: '#A8B3E9',
  });

  fireEvent(passwordField, 'focus');

  expect(passwordField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(passwordField, 'blur');

  expect(passwordField).toHaveStyle({
    borderBottomColor: '#A8B3E9',
  });
});

it('should change placeholder color when field is filled', () => {
  const { getByPlaceholderText } = render(<SignUp />);
  const usernameField = getByPlaceholderText('Username');
  const emailField = getByPlaceholderText('Email');
  const passwordField = getByPlaceholderText('Password');

  fireEvent(usernameField, 'focus');
  fireEvent.changeText(usernameField, 'Rengoku');
  fireEvent(usernameField, 'blur');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(emailField, 'focus');
  fireEvent.changeText(emailField, 'example@hyrule.com');
  fireEvent(emailField, 'blur');

  expect(emailField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(passwordField, 'focus');
  fireEvent.changeText(passwordField, '123');
  fireEvent(passwordField, 'blur');

  expect(passwordField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });
});
