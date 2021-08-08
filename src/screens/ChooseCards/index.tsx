import React, { useState, useEffect } from 'react';
import { Keyboard, FlatList, ActivityIndicator } from 'react-native';

import axios from 'axios';
import uuid from 'react-native-uuid';

import { useNavigation } from '@react-navigation/native';

import { useDeck } from '../../hooks/useDeck';
import { UserCard } from '../../context/deck';

import { pokeApi } from '../../services/pokeApi';

import { theme } from '../../global/styles/theme';

import {
  pokemonTypesPartOne,
  pokemonTypesPartTwo,
} from '../../utils/pokemonTypes';

import { Card } from '../../components/Card';
import { DeckNameInput } from '../../components/DeckNameInput';
import { FadeInOutButton } from '../../components/FadeInOutButton';
import { PokemonTypeFilter } from '../../components/PokemonTypeFilter';

import {
  getCachedCollection,
  setCachedCollection,
} from '../../cache/pokemonCollectionCache';

import {
  Container,
  Content,
  CardNameContent,
  PokemonTypesCategory,
  LoadingFlatlist,
  ButtonVisibility,
} from './styles';

type Result = {
  url: string;
};

export const ChooseCards = ({ route }: any) => {
  const [cardName, setCardName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [typesSelection, setTypesSelection] = useState<string[]>([]);
  const [cardsSelection, setCardsSelection] = useState<UserCard[]>([]);
  const [cardsCollection, setCardsCollection] = useState<UserCard[]>([]);
  const [cardsCollectionFiltered, setCardsCollectionFiltered] = useState<
    UserCard[]
  >([]);

  const { highlight } = theme.colors;

  useEffect(() => {
    handleGetCachedCollection();
  }, []);

  useEffect(() => {
    handlePokemonTypeFilter();
  }, [cardsCollection, typesSelection, cardName]);

  const { handleAddCard } = useDeck();
  const { goBack } = useNavigation();

  const handleCardName = (cardName: string) => setCardName(cardName);

  const handleCardsSelection = (cardInfo: UserCard) => {
    const isAlreadyInArray = cardsSelection.includes(cardInfo);

    isAlreadyInArray
      ? setCardsSelection(
          cardsSelection.filter(currentDeckId => currentDeckId != cardInfo),
        )
      : setCardsSelection([...cardsSelection, cardInfo]);
  };

  const handleTypeSelection = (typeName: string) => {
    const isLessThanTwoSelected = !(typesSelection.length >= 2);

    if (isLessThanTwoSelected || typesSelection.includes(typeName)) {
      typesSelection.includes(typeName)
        ? setTypesSelection(typesSelection.filter(value => typeName != value))
        : setTypesSelection([...typesSelection, typeName]);
    }
  };

  const handlePokemonTypeFilter = () => {
    let cardsCollectionCopy = cardsCollection;

    if (typesSelection.length > 0) {
      cardsCollectionCopy = cardsCollectionCopy.filter(
        value => JSON.stringify(typesSelection) === JSON.stringify(value.types),
      );
    }

    if (cardName) {
      cardsCollectionCopy = cardsCollectionCopy.filter(
        value => value.name === cardName.toLowerCase(),
      );
    }

    setCardsCollectionFiltered(cardsCollectionCopy);
  };

  const handleGetCachedCollection = async () => {
    const cardsCached = await getCachedCollection();
    const loaded = !cardsCached;

    if (cardsCached) {
      setCardsCollection(cardsCached);
    } else {
      handleCardsCollection();
    }

    setIsLoading(loaded);
  };

  const handleCardsCollection = async () => {
    const { data } = await pokeApi.get('/pokemon?limit=20');
    const allPokemonUrls: Result[] = data.results;

    const pokemonCollection = await Promise.all(
      allPokemonUrls.map(async value => {
        const { data } = await axios.get(value.url);
        const pokemon: UserCard = data;

        let types: string[] = [];

        pokemon.types.forEach(
          (value: any) => (types = [...types, value.type.name]),
        );

        const card: UserCard = {
          id: uuid.v4() as string,
          picture: data.sprites.other.dream_world.front_default,
          name: data.name,
          types: types,
          weight: data.weight,
          height: data.height,
        };

        return card;
      }),
    );

    await setCachedCollection(pokemonCollection);
    handleGetCachedCollection();
  };

  const handleAddCardsToDeck = () => {
    handleAddCard(route.params.deckId, cardsSelection);
    goBack();
  };

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Content>
        <CardNameContent>
          <DeckNameInput
            placeholder='Type a pokemon name'
            handleInputText={handleCardName}
          />
        </CardNameContent>

        <PokemonTypesCategory>
          {pokemonTypesPartOne.map(value => (
            <PokemonTypeFilter
              pokeType={value}
              key={value.id}
              handlePressButton={handleTypeSelection}
              isSelected={
                typesSelection.length == 0
                  ? true
                  : typesSelection.includes(value.type)
              }
            />
          ))}
        </PokemonTypesCategory>

        <PokemonTypesCategory>
          {pokemonTypesPartTwo.map(value => (
            <PokemonTypeFilter
              pokeType={value}
              key={value.id}
              handlePressButton={handleTypeSelection}
              isSelected={
                typesSelection.length == 0
                  ? true
                  : typesSelection.includes(value.type)
              }
            />
          ))}
        </PokemonTypesCategory>

        {isLoading ? (
          <LoadingFlatlist>
            <ActivityIndicator size='large' color={highlight} />
          </LoadingFlatlist>
        ) : (
          <FlatList
            data={cardsCollectionFiltered}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Card
                cardInfo={item}
                isSelected={
                  cardsSelection.find(value => value.id === item.id)
                    ? true
                    : false
                }
                handleLongPressButton={handleCardsSelection}
              />
            )}
            style={{ marginTop: 47, marginBottom: 20 }}
            contentContainerStyle={{
              marginHorizontal: 24,
            }}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />
        )}

        <ButtonVisibility>
          {cardsSelection.length != 0 && (
            <FadeInOutButton
              text='Add'
              isAlignRight
              handlePressButton={handleAddCardsToDeck}
            />
          )}
        </ButtonVisibility>
      </Content>
    </Container>
  );
};
