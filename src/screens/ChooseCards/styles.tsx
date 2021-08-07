import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback``;

export const Content = styled.View`
  flex: 1;
`;

export const CardNameContent = styled.View`
  margin: 61px 25px 42px;
`;

export const PokemonTypesCategory = styled.ScrollView.attrs<ScrollViewProps>({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  maxHeight: 63,
  minHeight: 63,
  contentContainerStyle: {
    paddingHorizontal: 25,
  },
})``;

export const ButtonVisibility = styled.View`
  width: 100%;
  height: 50px;
  margin-right: 25px;
  margin-bottom: 50px;
  align-items: flex-end;
`;

export const LoadingFlatlist = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
