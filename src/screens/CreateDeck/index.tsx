import React from 'react';
import { Keyboard } from 'react-native';

import { theme } from '../../global/styles/theme';

import ExitSVG from '../../assets/images/exit.svg';

import { DeckNameInput } from '../../components/DeckNameInput';

import { Container, Content, WrapperIcon, Text, CreateButton } from './styles';

type Props = {
  handleIsModalVisible: () => void;
};

export const CreateDeck = ({ handleIsModalVisible }: Props) => {
  const { buttonText, textColor50 } = theme.colors;

  return (
    <Container onPress={() => Keyboard.dismiss()}>
      <Content>
        <WrapperIcon onPress={handleIsModalVisible}>
          <ExitSVG height={56} width={56} />
        </WrapperIcon>

        <DeckNameInput handleInputText={() => {}} />

        <Text color={textColor50}>
          Write your deck name{'\n'}
          {'\n'}
          You can change it later{'\n'}
          as you want
        </Text>

        <CreateButton onPress={() => {}}>
          <Text color={buttonText}>Create deck</Text>
        </CreateButton>
      </Content>
    </Container>
  );
};
