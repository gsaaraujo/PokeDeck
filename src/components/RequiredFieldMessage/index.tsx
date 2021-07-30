import React from 'react';

import { Container, Text } from './styles';

type Props = {
  isRequiredFieldMessage?: boolean;
};

export const RequiredFieldMessage = ({
  isRequiredFieldMessage = false,
}: Props) => {
  return (
    <Container>
      <Text>
        {isRequiredFieldMessage && '* Please all fields are required'}
      </Text>
    </Container>
  );
};
