import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.button};
`;

export const Title = styled.Text`
  font-size: 18px;
  color: ${theme.colors.buttonText};
  font-family: ${theme.fonts.buttonText};
`;
