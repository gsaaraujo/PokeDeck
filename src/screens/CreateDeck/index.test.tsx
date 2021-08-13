import React from 'react';

import { fireEvent, render } from '@testing-library/react-native';

import { CreateDeck } from '.';

it('should close modal when exit button is pressed', () => {
  const modalVisible = jest.fn();

  const { getByTestId } = render(
    <CreateDeck handleIsModalVisible={modalVisible} />,
  );

  const closeModalButton = getByTestId('CloseModalButton');

  fireEvent.press(closeModalButton);
  expect(modalVisible).toBeCalledTimes(1);
});
