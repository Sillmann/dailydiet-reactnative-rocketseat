import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

type salvoProps={
  type: "PRIMARY" | "SECONDARY"
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};
  align-items: center;
  justify-content: center;
  padding: 0 20px;

  `;

export const Context = styled.View`
  width: 100%;
  height: 491px;
  margin: 0 32px;  
  align-items: center;
  
  `;

  export const Header = styled.View`
    flex: 1;
    align-items: center;
    width: 100%;
  `;

  export const TitleHeaderContext = styled.View`
    flex: 1;
    width: 100%;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin-top: 8px;
  `;

  export const TitleHeader = styled.Text<salvoProps>`
    ${({theme, type}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_M}px;
    color: ${ type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK };
    `};    
  `;
  export const SubTitleHeader = styled.Text`
  text-align: center;
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_M}px;
  color: ${ theme.COLORS.BASE.GRAY[100] };
  `};    
  `;

  export const SubTitleHeaderBold = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${ theme.COLORS.BASE.GRAY[100] };
  `};    
  `;

  export const DivImagem = styled.View`
    margin-top: 40px;
    align-items: center;
    justify-content: center;
  `;

  export const Illustration = styled.Image`
  width : 224px;
  height: 288px;  
`;

export const BtnVoltar = styled.TouchableOpacity`
  height: 50px;
  width: 191px;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[200]};
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  margin-top: 32px;
`;

export const BtnVoltarTexto = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_XS}px;
    color: ${ theme.COLORS.BASE.WHITE };
  `};    
`;