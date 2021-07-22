import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  padding-top: 7px;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${theme.colors.heading100};
  font-family: ${theme.fonts.title};
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Highlight = styled.Text`
  color: ${theme.colors.button};
`;
