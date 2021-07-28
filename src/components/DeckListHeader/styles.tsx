import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  size: number;
};

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.Text<TextProps>`
  color: ${theme.colors.textColor50};
  font-size: ${props => props.size}px;
  font-family: ${theme.fonts.textFont50};
`;
