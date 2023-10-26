import styled, {css} from "styled-components/native";

export type colorStyleProps = "GREEN" | "RED";

type Props = {
  type: colorStyleProps;
}

export const Container = styled.View<Props>`

  background-color: ${({theme, type}) => 
    type === 'GREEN' ? theme.COLORS.BRAND.GREEN.LIGHT : 
    type === 'RED' ? theme.COLORS.BRAND.RED.LIGHT : 
    theme.COLORS.BASE.WHITE};  

  width: 45%;
  height: 100px;
  margin-bottom: 12px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const InfoNum = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_G}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
`;

export const InfoText = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};  
  margin: 0 16px 0 16px;
  text-align: center;
`;