import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.TextInput.attrs<TextInputProps>({
  maxLength: 25,
  placeholder: 'Your deck name',
  placeholderTextColor: theme.colors.placeholder,
})`
  font-size: 18px;
  padding-left: 20px;
  border-radius: 20px;
  color: ${theme.colors.textColor100};
  font-family: ${theme.fonts.placeholder};
  border: 2px solid ${theme.colors.placeholder};
`;
