import React, { useState, useEffect, createContext, ReactNode } from 'react';

import { POKEMON_DECKS } from '../configs/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserCard = {
  id: string;
  picture: string;
  name: string;
  types: string[];
  weight: number;
  height: number;
};

export type UserDeck = {
  id: string;
  name: string;
  cards: UserCard[];
};

type Data = {
  decksCollection: UserDeck[];
  handleSetDecksCollection: (newDeck: UserDeck) => void;
  handleDeleteDeck: (deckId: string[]) => void;
  handleUpdateDeck: (updatedDeck: UserDeck) => void;
  handleAddCard: (deckId: string, userCard: UserCard[]) => void;
  handleDeleteCardFromDeck: (deckId: string, userCard: UserCard[]) => void;
};

type ChildrenProps = {
  children: ReactNode;
};

export const DeckContext = createContext<Data>({} as Data);

export const DeckProvider = ({ children }: ChildrenProps) => {
  const [decksCollection, setDecksCollection] = useState<UserDeck[]>([]);

  useEffect(() => {
    handleGetDecksColletion();
  }, []);

  const handleGetDecksColletion = async () => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);

      setDecksCollection(decksParse);
    }
  };

  const handleSetDecksCollection = async (newDeck: UserDeck) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const includeNewDeck = [...decksParse, newDeck];

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(includeNewDeck));
    } else {
      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify([newDeck]));
    }

    handleGetDecksColletion();
  };

  const handleUpdateDeck = async (updatedDeck: UserDeck) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const matchIndex = decksParse.findIndex(
        deck => deck.id === updatedDeck.id,
      );

      decksParse[matchIndex].name = updatedDeck.name;

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(decksParse));
    }

    handleGetDecksColletion();
  };

  const handleDeleteDeck = async (deckId: string[]) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const deleteDeck = decksParse.filter(({ id }) => !deckId.includes(id));

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(deleteDeck));
    }

    handleGetDecksColletion();
  };

  const handleAddCard = async (deckId: string, userCard: UserCard[]) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const matchIndex = decksParse.findIndex(deck => deck.id === deckId);
      const currentCards = decksParse[matchIndex].cards;

      decksParse[matchIndex].cards = currentCards.concat(userCard);

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(decksParse));
    }

    handleGetDecksColletion();
  };

  const handleDeleteCardFromDeck = async (
    deckId: string,
    userCard: UserCard[],
  ) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const matchIndex = decksParse.findIndex(deck => deck.id === deckId);

      let currentCards = decksParse[matchIndex].cards;

      currentCards = currentCards.filter(
        value => !userCard.find(each => value.id === each.id),
      );

      decksParse[matchIndex].cards = currentCards;

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(decksParse));
    }

    handleGetDecksColletion();
  };

  return (
    <DeckContext.Provider
      value={{
        decksCollection,
        handleSetDecksCollection,
        handleDeleteDeck,
        handleUpdateDeck,
        handleAddCard,
        handleDeleteCardFromDeck,
      }}>
      {children}
    </DeckContext.Provider>
  );
};
