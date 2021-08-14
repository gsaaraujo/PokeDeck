import React from 'react';

import PokeballSVG from '../../assets/images/pokeball.svg';
import PokeballNormalSVG from '../../assets/images/pokeballNormal.svg';

import { Container } from './styles';

type Props = {
  testID?: string;
  normalIcon?: boolean;
};

export const SelectOverlay = ({ testID, normalIcon = false }: Props) => {
  return (
    <Container testID={testID}>
      {normalIcon ? <PokeballNormalSVG /> : <PokeballSVG />}
    </Container>
  );
};
