import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import { MaterialIcons } from '@expo/vector-icons';

export type styleProps = "EDIT" | "DELETE" | "DEFAULT";

type Props = {
  type: styleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 56px;
  max-height: 56px;
  
  background-color: ${({theme, type}) =>  type === 'DELETE' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY[200]};  
  
  border-radius: 6px;
  border: solid 1px;


  align-items: center;
  justify-content: center;

  flex-direction: row;

  width: 327px;
`
export const ButtonTexto = styled.Text<Props>`
  color: ${({theme, type}) =>  type === 'DELETE' ? theme.COLORS.BASE.GRAY[100] : theme.COLORS.BASE.WHITE};   
  font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_S}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`
export const Icon = styled(MaterialIcons).attrs<Props>(({theme,type }) => ({
  size: 20,
  color: type === 'DELETE' ? theme.COLORS.BASE.GRAY[100] : theme.COLORS.BASE.WHITE
}))``;