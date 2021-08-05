import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type BackgroundTypeColorProps = {
  backgroundColor: string;
};
type ContainerProps = {
  borderColor: string;
};

export const Container = styled.Pressable<ContainerProps>`
  width: 31%;
  height: 150px;
  overflow: hidden;
  margin-bottom: 4%;
  border-radius: 10px;
  border: 2px solid ${props => props.borderColor};
`;

export const BackgroundTypeColor = styled.View<BackgroundTypeColorProps>`
  flex: 1;
  background-color: ${props => props.backgroundColor};
`;

export const Content = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: space-around;
`;

export const Text = styled.Text`
  font-size: 13px;
  color: ${theme.colors.buttonText};
  font-family: ${theme.fonts.textFont100};
`;

export const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.4);
`;
