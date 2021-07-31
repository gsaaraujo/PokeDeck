import { ModalProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.Modal.attrs<ModalProps>({
  transparent: true,
  animationType: 'slide',
})``;

export const Overlay = styled.View`
  flex: 1;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.6);
`;
