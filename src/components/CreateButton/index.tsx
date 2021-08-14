import React from 'react';

import PlusSVG from '../../assets/images/plus.svg';

import { Container } from './styles';

type Props = {
  testID?: string;
  handlePressButton: () => void;
};

export const CreateButton = ({ testID, handlePressButton }: Props) => {
  return (
    <Container
      testID={testID}
      style={{ elevation: 5 }}
      onPress={handlePressButton}>
      <PlusSVG />
    </Container>
  );
};
