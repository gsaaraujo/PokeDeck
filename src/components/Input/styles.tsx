import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type Props = {
  color: string;
};

export const Container = styled.View`
  width: 100%;
`;

export const TextInput = styled.TextInput.attrs<TextInputProps>({
  placeholderTextColor: theme.colors.placeholder,
  paddingVertical: 5,
})<Props>`
  font-size: 18px;
  font-family: ${theme.fonts.placeholder};
  margin-bottom: 55px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.color};
`;

export const IconWrapper = styled.TouchableOpacity`
  top: -15px;
  padding: 15px;
  position: absolute;
  align-self: flex-end;
`;
