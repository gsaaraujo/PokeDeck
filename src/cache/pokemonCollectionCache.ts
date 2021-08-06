import AsyncStorage from '@react-native-async-storage/async-storage';
import { POKEMON_CARDS_CACHE } from '../configs/asyncStorage';

import { UserCard } from '../context/deck';

export const setCachedCollection = async (cardsCollection: UserCard[]) => {
  try {
    await AsyncStorage.setItem(
      POKEMON_CARDS_CACHE,
      JSON.stringify(cardsCollection),
    );
  } catch (err) {}
};

export const getCachedCollection = async () => {
  try {
    const cards = await AsyncStorage.getItem(POKEMON_CARDS_CACHE);

    if (cards) {
      const cardsParse: UserCard[] = JSON.parse(cards as string);

      return cardsParse;
    }
  } catch (err) {}
};
