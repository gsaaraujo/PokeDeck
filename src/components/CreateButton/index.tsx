import React from 'react';

import PlusSVG from '../../assets/images/plus.svg';

import { Container } from './styles';

type Props = {
  handlePressButton: () => void;
};

export const CreateButton = ({ handlePressButton }: Props) => {
  return (
    <Container style={{ elevation: 5 }} onPress={handlePressButton}>
      <PlusSVG />
    </Container>
  );
};
