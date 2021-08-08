import React from 'react';

import '@testing-library/jest-native/extend-expect';

import { render, fireEvent } from '@testing-library/react-native';

import { SignIn } from '.';

jest.mock('@react-navigation/native');

it('should show error message for empty field', () => {
  const { getByText, getByTestId, getByPlaceholderText } = render(<SignIn />);
  const signInButton = getByTestId('Button.SignIn');

  getByPlaceholderText('Username');
  getByPlaceholderText('Password');

  fireEvent.press(signInButton);
  getByText('* Please all fields are required');
});

it('should change placeholder color when field is focused or blured', () => {
  const { getByPlaceholderText } = render(<SignIn />);
  const usernameField = getByPlaceholderText('Username');
  // No need for passwordField, since it should work in the same way

  fireEvent(usernameField, 'focus');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });

  fireEvent(usernameField, 'blur');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#A8B3E9',
  });
});

it('should change placeholder color when field is filled', () => {
  const { getByPlaceholderText } = render(<SignIn />);
  const usernameField = getByPlaceholderText('Username');
  // No need for passwordField, since it should work in the same way

  fireEvent(usernameField, 'focus');
  fireEvent.changeText(usernameField, 'Rengoku');
  fireEvent(usernameField, 'blur');

  expect(usernameField).toHaveStyle({
    borderBottomColor: '#27AE60',
  });
});
