import styled, { css } from "styled-components/native";

export type cardStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: cardStyleProps;
}

export const Container = styled.View<Props>`
  flex: 1;
  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN['LIGHT'] : theme.COLORS.BRAND.RED['LIGHT']};  
`;

export const Context = styled.View`
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};
  flex: 1;
  margin-top: 10px;
  padding:  0 24px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  text-align: center;
  margin: 23px 0;
`;

export const DivCardsQtdRefeicoes = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;