import React from 'react';

import ExitSVG from '../../assets/images/exit.svg';

import { Container } from './styles';

type Props = {
  handleIsModalVisible: () => void;
};

export const CloseModalButton = ({ handleIsModalVisible }: Props) => {
  return (
    <Container onPress={handleIsModalVisible}>
      <ExitSVG height={56} width={56} />
    </Container>
  );
};
