import { useContext } from 'react';
import { DeckContext } from '../context/deck';

export const useDeck = () => {
  const context = useContext(DeckContext);

  return context;
};
