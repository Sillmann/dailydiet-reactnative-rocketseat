import styled, {css} from "styled-components/native";


export type statusRefeicaoStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: statusRefeicaoStyleProps;
}


export const Container = styled.TouchableOpacity`
  height: 49px;
  border-radius:  6px;
  border: solid 1px;
  flex-direction:  row;
  align-items: center;
  margin-bottom: 8px ;

`;

export const LineVertical = styled.View`
  height: 14px;
  width:1px;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[400]};  
`;

export const TextHora = styled.Text`
${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_XS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};  
  width: 45px ;
  text-align: center;
  margin: 0 12px;
`;

export const TextNomeRefeicao = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};
  flex: 1;  
  /* width:  217px; */
  margin: 0 12px ;
`;

export const StatusRefeicao = styled.View<Props>`
  width: 28px;
  height: 28px;
  background-color: ${({theme, type}) => type === 'S' ? theme.COLORS.BRAND.GREEN['MID'] : theme.COLORS.BRAND.RED['MID']};  
  border-radius: 14px;
  margin: 0 12px ;
`;