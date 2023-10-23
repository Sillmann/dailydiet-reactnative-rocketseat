import { SafeAreaView } from 'react-native-safe-area-context';

import styled, {css} from "styled-components/native";

import { ArrowLeft } from 'phosphor-react-native';

export type cardEstatisticaStyleIconeVoltarProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: cardEstatisticaStyleIconeVoltarProps;
}


export const Container = styled.View<Props>`
  width: 100%;
  height: 180px;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['LIGHT'] : theme.COLORS.BRAND.RED['LIGHT']};  
  flex-direction: column; 
  `;

export const AreaSegura = styled(SafeAreaView)`
  flex: 1;
  height: 150px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
  width: 50px;
`;

export const IconArrowLeft = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 32,
  color: type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['DARK'] : theme.COLORS.BRAND.RED['DARK']
}))`
  position: absolute;
  left: 24px;
  top: 40px;
  width: 24px;
  height: 24px;
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
  line-height: 41px
`;

export const TextMensagem = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  height: 18px;
  line-height: 18px
`;