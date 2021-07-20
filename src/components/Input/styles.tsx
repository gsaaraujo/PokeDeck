import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type Props = {
  color: string;
};

export const Container = styled.TextInput.attrs<TextInputProps>({
  placeholderTextColor: theme.colors.placeholder,
  paddingVertical: 5,
})<Props>`
  font-size: 18px;
  margin-bottom: 55px;
  border-bottom-width: 2px;
  border-bottom-color: ${props => props.color};
  font-family: ${theme.fonts.placeholder};
`;
