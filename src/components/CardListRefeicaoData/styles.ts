import styled, { css } from "styled-components/native";


export const Container = styled.View`
  margin-top: 32px;
  flex: 1 ;
`;

export const DataRefeicao = styled.Text`
  margin-bottom: 12px ;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_S}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  
  `};  
`;
