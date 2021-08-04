import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type ContainerProps = {
  color: string;
  borderColor: string;
  isSelected: boolean;
};

export const Container = styled.Pressable<ContainerProps>`
  width: 75px;
  height: 52px;
  border-radius: 10px;
  margin: 2.5px;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border: 2px solid ${props => props.borderColor};
  opacity: ${props => (props.isSelected ? 1 : 0.5)};
`;

export const Text = styled.Text`
  font-size: 14px;
  color: ${theme.colors.buttonText};
  font-family: ${theme.fonts.textFont100};
`;
