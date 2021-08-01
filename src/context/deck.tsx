import React, { useState, useEffect, createContext, ReactNode } from 'react';

import { POKEMON_DECKS } from '../configs/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type UserCard = {
  picture: string;
  name: string;
  type: string;
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

  const handleDeleteDeck = async (deckId: string[]) => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS);

    if (decks) {
      const decksParse: UserDeck[] = JSON.parse(decks);
      const deleteDeck = decksParse.filter(({ id }) => !deckId.includes(id));

      await AsyncStorage.setItem(POKEMON_DECKS, JSON.stringify(deleteDeck));
    }

    handleGetDecksColletion();
  };

  return (
    <DeckContext.Provider
      value={{ decksCollection, handleSetDecksCollection, handleDeleteDeck }}>
      {children}
    </DeckContext.Provider>
  );
};
