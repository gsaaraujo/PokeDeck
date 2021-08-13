import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { LogOut } from '.';
import { useAuth } from '../../hooks/useAuth';
import { act } from 'react-test-renderer';

jest.mock('../../hooks/useAuth', () => {
  return {
    useAuth: () => ({
      handleLogOut: jest.fn(),
    }),
  };
});

it('should close modal when exit button or NO option button is pressed', () => {
  const modalVisible = jest.fn();

  const { getByText, getByTestId } = render(
    <LogOut handleIsModalVisible={modalVisible} />,
  );

  const closeModalButton = getByTestId('CloseModalButton');
  const optionButtonNO = getByText('No');

  fireEvent.press(closeModalButton);
  fireEvent.press(optionButtonNO);

  expect(modalVisible).toBeCalledTimes(2);
});

it('should logout when YES option button is pressed', () => {
  const modalVisible = jest.fn();
  const { handleLogOut } = useAuth();

  const { getByText } = render(<LogOut handleIsModalVisible={modalVisible} />);
  const optionButtonYES = getByText('Yes');

  act(() => {
    handleLogOut();
  });

  expect(optionButtonYES).toBeTruthy;
  expect(handleLogOut).toBeCalledTimes(1);
});
