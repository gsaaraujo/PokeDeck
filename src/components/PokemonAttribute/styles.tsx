import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

type TextProps = {
  color: string;
  size: number;
};

export const Container = styled.View`
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => props.color};
  font-size: ${props => props.size}px;
  font-family: ${theme.fonts.textFont50};
`;
