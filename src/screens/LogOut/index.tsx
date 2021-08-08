import React from 'react';

import { theme } from '../../global/styles/theme';

import { CloseModalButton } from '../../components/CloseModalButton';

import {
  Container,
  Content,
  Text,
  ButtonContent,
  ChoiceButton,
} from './styles';
import { useAuth } from '../../hooks/useAuth';

type Props = {
  handleIsModalVisible: () => void;
};

export const LogOut = ({ handleIsModalVisible }: Props) => {
  const { placeholder, buttonText } = theme.fonts;
  const { button, textColor100, background } = theme.colors;

  const { handleLogOut } = useAuth();

  return (
    <Container>
      <Content>
        <CloseModalButton handleIsModalVisible={handleIsModalVisible} />

        <Text font={placeholder} color={textColor100}>
          Would you like to leave ?
        </Text>

        <ButtonContent>
          <ChoiceButton color={'#ffffff'} onPress={handleLogOut}>
            <Text font={buttonText} color={button}>
              Yes
            </Text>
          </ChoiceButton>

          <ChoiceButton color={button} onPress={handleIsModalVisible}>
            <Text font={buttonText} color={'#ffffff'}>
              No
            </Text>
          </ChoiceButton>
        </ButtonContent>
      </Content>
    </Container>
  );
};
