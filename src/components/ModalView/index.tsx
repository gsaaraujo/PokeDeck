import React, { ReactNode } from 'react';
import { ModalProps } from 'react-native';

import { Container, Overlay } from './styles';

type Props = ModalProps & {
  children: ReactNode;
};

export const ModalView = ({ children, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Overlay>{children}</Overlay>
    </Container>
  );
};
