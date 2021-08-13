import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';

import { PokemonDescription } from '.';

const card = {
  id: '1',
  picture: '',
  name: 'pikachu',
  types: ['electric'],
  weight: 100,
  height: 100,
};

it('should show informations from the pokemon card pressed', () => {
  const modalVisible = jest.fn();
  const { getByText } = render(
    <PokemonDescription cardInfo={card} handleIsModalVisible={modalVisible} />,
  );

  const cardName = getByText('Pikachu');
  const cardtypes = getByText('electric');
  const cardWeight = getByText((card.weight / 10).toString());
  const cardHeight = getByText((card.height * 10).toString());

  expect(cardName).toBeTruthy();
  expect(cardtypes).toBeTruthy();
  expect(cardWeight).toBeTruthy();
  expect(cardHeight).toBeTruthy();
});

it('should close modal when exit button is pressed', () => {
  const modalVisible = jest.fn();
  const { getByTestId } = render(
    <PokemonDescription cardInfo={card} handleIsModalVisible={modalVisible} />,
  );

  const closeModalButton = getByTestId('CloseModalButton');
  expect(closeModalButton).toBeTruthy();

  fireEvent.press(closeModalButton);
  expect(modalVisible).toBeCalledTimes(1);
});
