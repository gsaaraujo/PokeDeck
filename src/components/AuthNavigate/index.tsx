import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Highlight } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  highlight: string;
};

export const AuthNavigate = ({ title, highlight, ...rest }: Props) => {
  return (
    <Container {...rest}>
      <Title>
        {title} <Highlight>{highlight}</Highlight>
      </Title>
    </Container>
  );
};
