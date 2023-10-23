import styled, {css} from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { ArrowUpRight } from 'phosphor-react-native';

export type cardEstatisticaStyleIconeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: cardEstatisticaStyleIconeProps;
}

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  height: 102px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['LIGHT'] : theme.COLORS.BRAND.RED['LIGHT']};  
  flex-direction: column;  
`;

export const IconArrowUpRight = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['DARK'] : theme.COLORS.BRAND.RED['DARK']
}))`
  position: absolute;
  right: 8px;
  top: 8px;
  height: 32px;
`;

export const DivTexts = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextPercentagem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
`;

export const TextMensagem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  height: 18px;
`;