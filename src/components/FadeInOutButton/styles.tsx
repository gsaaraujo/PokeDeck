import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type Props = {
  align: boolean;
};

export const Container = styled.TouchableOpacity<Props>`
  width: 100px;
  height: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.button};
  border-top-left-radius: ${props => (props.align ? '10px' : '0px')};
  border-top-right-radius: ${props => (props.align ? '0px' : '10px')};
  border-bottom-left-radius: ${props => (props.align ? '10px' : '0px')};
  border-bottom-right-radius: ${props => (props.align ? '0px' : '10px')};
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${theme.colors.buttonText};
  font-family: ${theme.fonts.buttonText};
`;
