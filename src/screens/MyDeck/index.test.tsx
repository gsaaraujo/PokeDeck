import React from 'react';

import { useNavigation } from '@react-navigation/native';

import { render, fireEvent } from '@testing-library/react-native';
import { renderHook, act } from '@testing-library/react-hooks';

import { MyDeck } from '.';

import { useDeck } from '../../hooks/useDeck';

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

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  };
});

describe('', () => {
  const { result } = renderHook(() => useDeck());

  const mockRoute = {
    params: { deckId: '1', deckName: '' },
  };

  it('should show a message and its amount when card list is empty ', () => {
    act(() => {
      result.current.decksCollection = [];
    });

    const { getByText } = render(<MyDeck route={mockRoute} />);

    const message = getByText('What about adding some pokémon ?');
    const pokemonAmount = getByText('Total 0');

    expect(message).toBeTruthy();
    expect(pokemonAmount).toBeTruthy();
  });

  it('should show a list of cards and its amount when there are cards stored ', async () => {
    act(() => {
      result.current.decksCollection = [pokeDeck];
    });

    const { getByText, getAllByTestId } = render(<MyDeck route={mockRoute} />);

    const card = getAllByTestId('FlatList.Card');
    const pokemonAmount = getByText('Total 1');

    expect(card.length).toBe(1);
    expect(pokemonAmount).toBeTruthy();
  });

  it('should show a delete button when a card is long pressed', () => {
    act(() => {
      result.current.decksCollection = [pokeDeck];
    });

    const { getByText, getByTestId } = render(<MyDeck route={mockRoute} />);

    const card = getByTestId('FlatList.Card');
    fireEvent(card, 'onLongPress');

    const deleteButton = getByText('Delete');
    expect(deleteButton).toBeTruthy();
  });

  it('should delete card from list when delete button is pressed', () => {
    act(() => {
      result.current.decksCollection = [pokeDeck];
      result.current.handleDeleteCardFromDeck = jest.fn();
    });

    const { getByText, getByTestId } = render(<MyDeck route={mockRoute} />);

    const card = getByTestId('FlatList.Card');
    fireEvent(card, 'onLongPress');

    const deleteButton = getByText('Delete');
    expect(deleteButton).toBeTruthy();

    fireEvent.press(deleteButton);
    expect(result.current.handleDeleteCardFromDeck).toBeCalledTimes(1);
  });

  it('should show card overlay style when card is long pressed', () => {
    act(() => {
      result.current.decksCollection = [pokeDeck];
    });

    const { getByTestId } = render(<MyDeck route={mockRoute} />);

    const card = getByTestId('FlatList.Card');
    fireEvent(card, 'onLongPress');

    const overlay = getByTestId('Overlay');
    expect(overlay).toBeTruthy();
  });
});
