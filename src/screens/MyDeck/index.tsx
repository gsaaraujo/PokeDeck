import React, { useState, useEffect } from 'react';
import { FlatList, Alert, Keyboard } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useDeck } from '../../hooks/useDeck';
import { UserCard, UserDeck } from '../../context/deck';

import { Card } from '../../components/Card';
import { CreateButton } from '../../components/CreateButton';
import { DeckNameInput } from '../../components/DeckNameInput';
import { DeckListHeader } from '../../components/DeckListHeader';
import { FadeInOutButton } from '../../components/FadeInOutButton';
import { EmptyListMessage } from '../../components/EmptyListMessage';

import {
  Container,
  Content,
  DeckNameContent,
  ButtonContainer,
  ButtonVisibility,
} from './styles';

export const MyDeck = ({ route }: any) => {
  const [deckName, setDeckName] = useState('');
  const [cardsSelection, setCardsSelection] = useState<UserCard[]>([]);
  const [cardsCollection, setCardsCollection] = useState<UserCard[]>([]);

  const currentDeck = route.params;

  const { navigate } = useNavigation();
  const { decksCollection, handleUpdateDeck, handleDeleteCardFromDeck } =
    useDeck();

  useEffect(() => {
    handleCardsCollection();
    handleDeckName(currentDeck.deckName);
  }, [decksCollection]);

  const handleCardsSelection = (cardInfo: UserCard) => {
    const isAlreadyInArray = cardsSelection.includes(cardInfo);

    isAlreadyInArray
      ? setCardsSelection(
          cardsSelection.filter(currentDeckId => currentDeckId != cardInfo),
        )
      : setCardsSelection([...cardsSelection, cardInfo]);
  };

  const handleCardsCollection = () => {
    const matchDeck = decksCollection.find(
      value => value.id === currentDeck.deckId,
    ) as UserDeck;

    setCardsCollection(matchDeck.cards);
  };

  const handleDeckName = (name: string) => setDeckName(name);

  const handleDeckChanges = () => {
    const updatedDeck = {
      id: currentDeck.deckId,
      name: deckName,
      cards: [],
    };

    handleUpdateDeck(updatedDeck);
  };

  const handleDeleteCard = () => {
    handleDeleteCardFromDeck(route.params.deckId, cardsSelection);
    setCardsSelection([]);
  };

  const handleNavigateToAddCard = () =>
    navigate('ChooseCards', { deckId: currentDeck.deckId });

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Content>
        <DeckNameContent>
          <DeckNameInput
            handleInputText={handleDeckName}
            onBlur={handleDeckChanges}
            value={deckName}
          />
        </DeckNameContent>

        <DeckListHeader text='Your cards' amount={cardsCollection.length} />

        {cardsCollection.length == 0 ? (
          <EmptyListMessage text='What about adding some pokémon ?' />
        ) : (
          <FlatList
            data={cardsCollection}
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
            style={{ marginTop: 47 }}
            contentContainerStyle={{
              marginHorizontal: 24,
            }}
            showsVerticalScrollIndicator={false}
            numColumns={3}
          />
        )}

        <ButtonContainer>
          {cardsSelection.length === 0 ? (
            <ButtonVisibility />
          ) : (
            <FadeInOutButton
              text='Delete'
              handlePressButton={handleDeleteCard}
            />
          )}

          <CreateButton handlePressButton={handleNavigateToAddCard} />
        </ButtonContainer>
      </Content>
    </Container>
  );
};
