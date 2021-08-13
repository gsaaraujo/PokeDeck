import React from 'react';

import ExitSVG from '../../assets/images/exit.svg';

import { Container } from './styles';

type Props = {
  testID?: string;
  handleIsModalVisible: () => void;
};

export const CloseModalButton = ({ testID, handleIsModalVisible }: Props) => {
  return (
    <Container testID={testID} onPress={handleIsModalVisible}>
      <ExitSVG height={56} width={56} />
    </Container>
  );
};
