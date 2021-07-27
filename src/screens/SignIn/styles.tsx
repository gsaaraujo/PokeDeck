import styled from 'styled-components/native';

import { theme } from '../../global/styles/theme';

export const Container = styled.Pressable`
  flex: 1;
  justify-content: space-evenly;
`;

export const Content = styled.View`
  padding-left: 45px;
  padding-right: 45px;
`;

export const Title = styled.Text`
  font-size: 36px;
  text-align: center;
  font-family: ${theme.fonts.title};
  color: ${theme.colors.heading100};
`;

export const Subtitle = styled.Text`
  font-size: 16px;
  align-self: flex-end;
  color: ${theme.colors.heading100};
  font-family: ${theme.fonts.heading50};
`;

export const Action = styled.TouchableOpacity`
  padding-top: 7px;
`;

export const LineContainer = styled.View`
  padding-top: 86px;
  padding-bottom: 43px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Line = styled.View`
  width: 40%;
  height: 2px;
  background-color: ${theme.colors.placeholder};
`;

export const LineTitle = styled.Text`
  font-size: 18px;
  color: ${theme.colors.placeholder};
  font-family: ${theme.fonts.heading50};
`;

export const ActionContainer = styled.View`
  align-items: center;
`;
