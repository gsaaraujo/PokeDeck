import React, { useState, useEffect } from 'react';
import { Alert, FlatList } from 'react-native';

import { useAuth } from '../../hooks/useAuth';

import { theme } from '../../global/styles/theme';

import { POKEMON_DECKS } from '../../configs/asyncStorage';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Deck } from '../../components/Deck';
import { DeckListHeader } from '../../components/DeckListHeader';
import { FadeInOutButton } from '../../components/FadeInOutButton';

import {
  Container,
  Header,
  Profile,
  Avatar,
  UserInfo,
  Text,
  EmptyDeckList,
  EmptyDeckListMessage,
  DeckList,
  Footer,
} from './styles';

type Deck = {
  id: string;
  text: string;
  amountPokemon: number;
};

export const Home = () => {
  const [deckSelection, setDeckSelection] = useState<string[]>([]);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [decksCollection, setDecksCollection] = useState<Deck[]>([]);

  const { user } = useAuth();
  const { header, textFont50 } = theme.fonts;
  const { textColor100 } = theme.colors;

  useEffect(() => {
    handleDecksCollection();
    handleIsButtonVisible();
  });

  const handleIsButtonVisible = () => {
    deckSelection.length == 0
      ? setIsButtonVisible(false)
      : setIsButtonVisible(true);
  };

  const handleDecksCollection = async () => {
    const decks = await AsyncStorage.getItem(POKEMON_DECKS).catch(error =>
      Alert.alert('Not able to restore deck', 'Please try again later'),
    );

    if (decks) {
      const deckParse = JSON.parse(decks as string);

      setDecksCollection(deckParse);
    }
  };

  const handleDeckDelete = async () => {
    const collectionUpdated = decksCollection.filter(value =>
      deckSelection.includes(value.id),
    );

    const collectionUpdatedStringfy = JSON.stringify(collectionUpdated);

    AsyncStorage.setItem(POKEMON_DECKS, collectionUpdatedStringfy).catch(
      error => Alert.alert('Not able to store deck', 'Please try again later'),
    );
  };

  const handleDeckSelection = (deckId: string) => {
    const isAlreadyInArray = deckSelection.includes(deckId);

    isAlreadyInArray
      ? setDeckSelection(
          deckSelection.filter(currentDeckId => currentDeckId != deckId),
        )
      : setDeckSelection([...deckSelection, deckId]);
  };

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar source={{ uri: user.picture }} />
          <UserInfo>
            <Text font={header} color={textColor100} size={20}>
              Hello, {user.name}
            </Text>
            <Text font={textFont50} color={textColor100} size={16}>
              You’re fabulous today
            </Text>
          </UserInfo>
        </Profile>
      </Header>

      <DeckList>
        <DeckListHeader text='Your decks' amount={decksCollection.length} />

        {decksCollection.length == 0 ? (
          <EmptyDeckList>
            <EmptyDeckListMessage>
              You might want create{'\n'}
              some decks !
            </EmptyDeckListMessage>
          </EmptyDeckList>
        ) : (
          <FlatList
            data={decksCollection}
            style={{ marginTop: 47 }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Deck
                deckInfo={item}
                handleLongPressDeck={handleDeckSelection}
                isSelected={deckSelection.includes(item.id)}
              />
            )}
            contentContainerStyle={{
              marginHorizontal: 25,
            }}
            showsVerticalScrollIndicator={false}
          />
        )}
      </DeckList>

      <Footer>
        {isButtonVisible && (
          <FadeInOutButton text='delete' handlePressButton={handleDeckDelete} />
        )}
        {isButtonVisible && (
          <FadeInOutButton
            text='share'
            isAlignRight
            handlePressButton={() => {}}
          />
        )}
      </Footer>
    </Container>
  );
};
