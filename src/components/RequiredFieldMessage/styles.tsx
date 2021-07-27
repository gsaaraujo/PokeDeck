import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.View`
  width: 100%;
  margin-bottom: 5px;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${theme.colors.warning};
  font-family: ${theme.fonts.textFont100};
`;
