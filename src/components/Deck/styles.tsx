import styled from 'styled-components/native';
import { theme } from '../../global/styles/theme';

type TextProps = {
  font: string;
  size: number;
};

export const Container = styled.Pressable`
  width: 100%;
  height: 65px;
  margin-bottom: 15px;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  background-color: ${theme.colors.decks};
`;

export const IconWrapper = styled.View`
  width: 81px;
  height: 46px;
  margin-left: 8px;
  margin-right: 14px;
`;

export const DeckInfo = styled.View``;

export const Text = styled.Text<TextProps>`
  color: ${theme.colors.buttonText};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
`;
