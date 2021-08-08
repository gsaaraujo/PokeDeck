import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/useAuth';
import { useDeck } from '../../hooks/useDeck';

import { theme } from '../../global/styles/theme';

import { LogOut } from '../../screens/LogOut';

import { CreateDeck } from '../CreateDeck';

import { Deck } from '../../components/Deck';
import { ModalView } from '../../components/ModalView';
import { CreateButton } from '../../components/CreateButton';
import { DeckListHeader } from '../../components/DeckListHeader';
import { FadeInOutButton } from '../../components/FadeInOutButton';
import { EmptyListMessage } from '../../components/EmptyListMessage';

import {
  Container,
  Header,
  Profile,
  Avatar,
  UserInfo,
  Text,
  DeckList,
  ButtonContainer,
  ButtonVisibility,
} from './styles';

export const Home = () => {
  const [deckSelection, setDeckSelection] = useState<string[]>([]);
  const [isCreateDeckModalVisible, setCreateDeckIsModalVisible] =
    useState(false);
  const [isLogOutModalVisible, setIsLogOutModalVisible] = useState(false);

  const { user } = useAuth();
  const { navigate } = useNavigation();
  const { decksCollection, handleDeleteDeck } = useDeck();

  const { header, textFont50 } = theme.fonts;
  const { textColor100 } = theme.colors;

  const handleIsCreateDeckModalVisible = () =>
    setCreateDeckIsModalVisible(!isCreateDeckModalVisible);

  const handleIsLogOutModalVisible = () =>
    setIsLogOutModalVisible(!isLogOutModalVisible);

  const handleDeckDelete = async () => {
    handleDeleteDeck(deckSelection);
    setDeckSelection([]);
  };

  const handleNavigateToMyDeck = (deckId: string, deckName: string) =>
    navigate('MyDeck', { deckId, deckName });

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
        <Profile onPress={handleIsLogOutModalVisible}>
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

        {decksCollection.length ? (
          <FlatList
            data={decksCollection}
            style={{ marginTop: 47 }}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Deck
                deckInfo={item}
                handleLongPressDeck={handleDeckSelection}
                handlePressDeck={handleNavigateToMyDeck}
                isSelected={deckSelection.includes(item.id)}
              />
            )}
            contentContainerStyle={{
              marginHorizontal: 25,
            }}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <EmptyListMessage
            text='You might want
              create some decks !'
          />
        )}
      </DeckList>

      <ButtonContainer>
        {deckSelection.length === 0 ? (
          <ButtonVisibility />
        ) : (
          <FadeInOutButton text='delete' handlePressButton={handleDeckDelete} />
        )}

        <CreateButton handlePressButton={handleIsCreateDeckModalVisible} />
      </ButtonContainer>

      <ModalView visible={isCreateDeckModalVisible}>
        <CreateDeck handleIsModalVisible={handleIsCreateDeckModalVisible} />
      </ModalView>

      <ModalView visible={isLogOutModalVisible}>
        <LogOut handleIsModalVisible={handleIsLogOutModalVisible} />
      </ModalView>
    </Container>
  );
};
