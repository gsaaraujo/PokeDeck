import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';

import '@testing-library/jest-native/extend-expect';

import { Home } from '.';

import { useDeck } from '../../hooks/useDeck';
import { useAuth } from '../../hooks/useAuth';

const pokeCard = {
  id: '1',
  picture: '',
  name: 'pikachu',
  types: ['electric'],
  weight: 100,
  height: 100,
};

const pokeDeck = {
  id: '1',
  name: '',
  cards: [pokeCard],
};

const user = {
  name: 'Rengoku',
  picture: '',
};

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('should test Home screen', () => {
  const auth = renderHook(() => useAuth());
  const deck = renderHook(() => useDeck());

  it('should show a message and its amount when deck list is empty', () => {
    act(() => {
      auth.result.current.user = user;
      deck.result.current.decksCollection = [];
    });

    const { getByText } = render(<Home />);

    const message = getByText('You might want create some decks !');
    const userDeckAmount = getByText('Total 0');

    expect(message).toBeTruthy();
    expect(userDeckAmount).toBeTruthy();
  });

  it('should show a list of decks and its amount when there are decks stored', () => {
    act(() => {
      auth.result.current.user = user;
      deck.result.current.decksCollection = [pokeDeck];
    });

    const { getByText, getAllByTestId } = render(<Home />);

    const userDeckAmount = getByText('Total 1');
    const userDeck = getAllByTestId('FlatList.Deck');

    expect(userDeckAmount).toBeTruthy();
    expect(userDeck.length).toBe(1);
  });

  it('should show deck overlay style when card is long pressed', () => {
    act(() => {
      auth.result.current.user = user;
      deck.result.current.decksCollection = [pokeDeck];
    });

    const { getByTestId } = render(<Home />);

    const userDeck = getByTestId('FlatList.Deck');
    fireEvent(userDeck, 'onLongPress');

    const selectOverlay = getByTestId('SelectOverlay');
    expect(selectOverlay).toBeTruthy();
  });

  it('should show a delete button when a deck is long pressed', () => {
    act(() => {
      deck.result.current.decksCollection = [pokeDeck];
    });

    const { getByText, getByTestId } = render(<Home />);

    const userDeck = getByTestId('FlatList.Deck');
    fireEvent(userDeck, 'onLongPress');

    const deleteButton = getByText('delete');
    expect(deleteButton).toBeTruthy();
  });

  it('should show logout modal when profile button is pressed', () => {
    const { getByTestId } = render(<Home />);

    const profileButton = getByTestId('Button.Profile');
    fireEvent.press(profileButton);

    const modalLogOut = getByTestId('Modal.LogOut');
    expect(modalLogOut.props.visible).toBeTruthy();
  });

  it('should show create deck modal when create button is pressed', () => {
    const { getByTestId } = render(<Home />);

    const createDeckButton = getByTestId('CreateButton');
    fireEvent.press(createDeckButton);

    const modalcreateDeck = getByTestId('Modal.CreateDeck');
    expect(modalcreateDeck.props.visible).toBeTruthy();
  });
});
