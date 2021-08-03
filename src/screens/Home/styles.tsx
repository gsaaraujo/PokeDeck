import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  color: string;
  font: string;
  size: number;
};

type ButtonVisibilityProps = {
  isVisible: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 25%;
  justify-content: center;
  background-color: ${theme.colors.header};
`;

export const Profile = styled.View`
  top: -30px;
  margin-left: 25px;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 35px;
`;

export const UserInfo = styled.View`
  margin-left: 17px;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: ${props => props.font};
`;

export const Bold = styled.Text`
  font-size: ${theme.fonts.headerBold};
`;

export const DeckList = styled.View`
  flex: 1;
  top: -50px;
  padding-top: 50px;
  border-top-left-radius: 60px;
  background-color: ${theme.colors.background};
`;

export const ButtonContainer = styled.View`
  height: 50px;
  margin-right: 25px;
  margin-bottom: 50px;
  flex-direction: row;
  justify-content: space-between;
`;

export const ButtonVisibility = styled.View<ButtonVisibilityProps>`
  opacity: ${props => (props.isVisible ? 1 : 0)};
`;
