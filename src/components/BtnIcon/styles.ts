import { TouchableOpacity } from "react-native";
import styled, {css} from "styled-components/native";
import { Plus } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[200]};
  height: 50px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
  color: theme.COLORS.BASE.WHITE,
  size: 18,
}))`
  margin-right: 14px;
`;

export const TextBtn = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.WHITE};
  `};  
`;
