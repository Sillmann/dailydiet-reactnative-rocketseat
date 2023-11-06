import styled, {css} from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY[500]};    
  flex-direction: column; 
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