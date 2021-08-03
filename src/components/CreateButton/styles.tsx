import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.button};
`;
