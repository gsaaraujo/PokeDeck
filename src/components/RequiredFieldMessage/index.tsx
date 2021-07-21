import React from 'react';

import { Container, Title } from './styles';

type Props = {
  isRequiredFieldMessage?: boolean;
};

export const RequiredFieldMessage = ({
  isRequiredFieldMessage = false,
}: Props) => {
  return (
    <Container>
      <Title>
        {isRequiredFieldMessage && '* Please all fields are required'}
      </Title>
    </Container>
  );
};
