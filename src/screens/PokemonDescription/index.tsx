import React from 'react';

import { SvgUri } from 'react-native-svg';

import { UserCard } from '../../context/deck';
import { theme } from '../../global/styles/theme';

import { CloseModalButton } from '../../components/CloseModalButton';

import {
  Container,
  Content,
  PokemonContent,
  Text,
  IconWrapper,
  Characteristic,
  Line,
} from './styles';
import { PokemonAttribute } from '../../components/PokemonAttribute';

type Props = {
  cardInfo: UserCard;
  handleIsModalVisible: () => void;
};

export const PokemonDescription = ({
  cardInfo,
  handleIsModalVisible,
}: Props) => {
  const { textColor100 } = theme.colors;

  return (
    <Container>
      <CloseModalButton
        testID={'CloseModalButton'}
        handleIsModalVisible={handleIsModalVisible}
      />

      <Content>
        <PokemonContent>
          <Text color={textColor100} size={18}>
            {cardInfo.name[0].toLocaleUpperCase() + cardInfo.name.slice(1)}
          </Text>

          <IconWrapper>
            <SvgUri uri={cardInfo.picture} width={150} height={150} />
          </IconWrapper>

          <Characteristic>
            <PokemonAttribute text='weight' subtext={[cardInfo.weight / 10]} />
            <PokemonAttribute text='height' subtext={[cardInfo.height * 10]} />
            <PokemonAttribute text='type' subtext={cardInfo.types} />
          </Characteristic>

          <Line />
        </PokemonContent>
      </Content>
    </Container>
  );
};
