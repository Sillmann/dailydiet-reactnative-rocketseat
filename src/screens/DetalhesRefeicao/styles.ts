import styled, {css} from "styled-components/native";

import { PencilSimpleLine, Trash } from 'phosphor-react-native';

export type btnDietaStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: btnDietaStyleProps;
}


export const Container = styled.View`
  flex: 1;
  height: 100%;  
`;

export const Context = styled.View<Props>`
  flex: 1;
  width: 100%;
  background-color: ${({theme, type}) =>  type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};  
`;

export const ViewPrincipal = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 24px;
  padding-top: 16px;
`;

export const ViewTextos = styled.View`
  height: 205px;
  width: 100%;
`;

export const Titulo = styled.Text`
  margin-top: 24px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_MS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
`;

export const SubTitulo = styled.Text`
  margin-top: 8px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};    
`;

export const TituloXS = styled.Text`
  margin-top: 24px;
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
  `;

export const ViewDentroDieta = styled.View`
  margin-top: 24px;
  width: 144px;
  height: 34px;
  flex-direction: row;
  border-radius: 1000px;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[600]};
  justify-content: center;
  align-items: center;
`;

export const CirculoStatusDieta = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({theme, type}) =>  type === 'PRIMARY' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};  
`;

export const TextoStatusDieta = styled.Text`
  margin-left: 8px;
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_S}px;
  color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
`;

export const ViewBtnEditarExcluir = styled.View`
  position: absolute;
  width: 100%;
  height: 105px;
  bottom: 30px;
  right: 0;
  padding: 0 24px;
`;

export const BtnEditarExcluir = styled.TouchableOpacity<Props>`
  
  margin-bottom: 10px;
  width: 100%;
  height: 50px;
  background-color: ${({theme, type}) => type === 'DEFAULT' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY[200] };
  border: 1px solid;
  border-color: ${({theme, type}) => type === 'DEFAULT' ? theme.COLORS.BASE.GRAY[100] : theme.COLORS.BASE.GRAY[200] };
  border-radius: 6px;
`;

export const ViewBtnInterno = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const IconPencilSimpleLine = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.BASE.WHITE: theme.COLORS.BASE.GRAY[100]
}))`
  width: 18px;
  height: 18px;
`;

export const IconTrash = styled(Trash).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.BASE.WHITE: theme.COLORS.BASE.GRAY[100]
}))`
  width: 18px;
  height: 18px;
`;

export const TextBtn = styled.Text<Props>`
  
  margin-left: 8px;
  ${({theme, type}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BODY_S}px;
    color: ${type === 'PRIMARY' ? theme.COLORS.BASE.WHITE : theme.COLORS.BASE.GRAY[100]};
  `};    
  width: 100px;
  height: 18px;
`;
