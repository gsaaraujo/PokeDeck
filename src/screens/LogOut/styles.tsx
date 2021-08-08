import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  font: string;
  color: string;
};

type ChoiceButtonProps = {
  color: string;
};

export const Container = styled.View`
  height: 40%;
`;

export const Content = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-evenly;
  background-color: ${theme.colors.background};
`;

export const Text = styled.Text<TextProps>`
  font-size: 18px;
  text-align: center;
  color: ${props => props.color};
  font-family: ${theme.fonts.header};
`;

export const ButtonContent = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ChoiceButton = styled.TouchableOpacity<ChoiceButtonProps>`
  width: 110px;
  height: 56px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  border: 2px solid ${theme.colors.button};
  background-color: ${props => props.color};
`;
