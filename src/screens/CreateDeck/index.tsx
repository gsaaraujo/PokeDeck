import React, { useState } from 'react';

import uuid from 'react-native-uuid';

import { theme } from '../../global/styles/theme';
import ExitSVG from '../../assets/images/exit.svg';

import { useDeck } from '../../hooks/useDeck';
import { UserDeck } from '../../context/deck';

import { DeckNameInput } from '../../components/DeckNameInput';

import { Container, Content, Text, CreateButton } from './styles';
import { CloseModalButton } from '../../components/CloseModalButton';

type Props = {
  handleIsModalVisible: () => void;
};

export const CreateDeck = ({ handleIsModalVisible }: Props) => {
  const [deckName, setDeckName] = useState('');

  const { handleSetDecksCollection } = useDeck();

  const { buttonText, textColor50 } = theme.colors;

  const handleDeckName = (name: string) => setDeckName(name);

  const handleCreateDeck = async () => {
    const deck: UserDeck = {
      id: uuid.v4() as string,
      name: deckName,
      cards: [],
    };

    handleSetDecksCollection(deck);
    handleIsModalVisible();
  };

  return (
    <Container>
      <Content>
        <CloseModalButton handleIsModalVisible={handleIsModalVisible} />

        <DeckNameInput handleInputText={handleDeckName} />

        <Text color={textColor50}>
          Write your deck name{'\n'}
          {'\n'}
          You can change it later{'\n'}
          as you want
        </Text>

        <CreateButton onPress={handleCreateDeck}>
          <Text color={buttonText}>Create deck</Text>
        </CreateButton>
      </Content>
    </Container>
  );
};
