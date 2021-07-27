import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.Pressable`
  flex: 1;
  justify-content: space-evenly;
`;

export const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: ${theme.fonts.header};
  color: ${theme.colors.textColor100};
`;

export const Content = styled.View`
  padding-left: 45px;
  padding-right: 45px;
`;
