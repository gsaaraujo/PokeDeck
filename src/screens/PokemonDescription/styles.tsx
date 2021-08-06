import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  color: string;
  size: string[] | number;
};

export const Container = styled.View`
  height: 70%;
  padding: 40px 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 40px;
`;

export const PokemonContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: ${theme.fonts.textFont50};
`;

export const IconWrapper = styled.View`
  width: 150px;
  height: 150px;
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const Characteristic = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const Line = styled.View`
  width: 100%;
  height: 2px;
  margin-top: 25px;
  margin-bottom: 25px;
  background-color: ${theme.colors.placeholder};
`;
