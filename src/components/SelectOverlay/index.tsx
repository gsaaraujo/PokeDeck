import React from 'react';

import PokeballSVG from '../../assets/images/pokeball.svg';
import PokeballNormalSVG from '../../assets/images/pokeballNormal.svg';

import { Container } from './styles';

type Props = {
  normalIcon?: boolean;
};

export const SelectOverlay = ({ normalIcon = false }: Props) => {
  return (
    <Container>
      {normalIcon ? <PokeballNormalSVG /> : <PokeballSVG />}
    </Container>
  );
};
