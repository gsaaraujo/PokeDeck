import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  padding-left: 91px;
  padding-right: 91px;
  text-align: center;
  color: ${theme.colors.textColor50};
  font-family: ${theme.fonts.header};
`;
