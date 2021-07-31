import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  color: string;
};

export const Container = styled.TouchableWithoutFeedback`
  flex: 1;
`;

export const Content = styled.View`
  height: 60%;
  padding-left: 25px;
  padding-right: 25px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-around;
  background-color: ${theme.colors.background};
`;

export const WrapperIcon = styled.TouchableOpacity`
  align-self: center;
`;

export const Text = styled.Text<TextProps>`
  font-size: 18px;
  text-align: center;
  color: ${props => props.color};
  font-family: ${theme.fonts.header};
`;

export const CreateButton = styled.TouchableOpacity`
  width: 162px;
  height: 56px;
  align-self: center;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.button};
`;
