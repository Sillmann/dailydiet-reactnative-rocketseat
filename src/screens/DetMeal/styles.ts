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
  background-color: ${({theme, type}) =>  type === 'S' ? theme.COLORS.BRAND.GREEN.LIGHT : theme.COLORS.BRAND.RED.LIGHT};  
`;

export const Form = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700]};  
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 0 24px;
  padding-top: 16px;
`;

export const Title = styled.Text`
  margin-top: 24px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.TITLE_MS}px;
    color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
`;

export const SubTitle = styled.Text`
  margin-top: 8px;
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.BODY_M}px;
    color: ${theme.COLORS.BASE.GRAY[200]};
  `};    
`;

export const Label = styled.Text`
  margin-top: 24px;
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.TITLE_XS}px;
  color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
  `;

export const Diet = styled.View`
  margin-top: 24px;
  width: 144px;
  height: 50px;
  flex-direction: row;
  border-radius: 1000px;
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[600]};
  justify-content: center;
  align-items: center;
`;

export const ImgDiet = styled.View<Props>`
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background-color: ${({theme, type}) =>  type === 'S' ? theme.COLORS.BRAND.GREEN.DARK : theme.COLORS.BRAND.RED.DARK};  
`;

export const TextDiet = styled.Text`
  margin-left: 8px;
  ${({theme}) => css`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.BODY_S}px;
  color: ${theme.COLORS.BASE.GRAY[100]};
  `};    
`;

export const ListButtons = styled.View`
  position: absolute;
  width: 100%;
  height: 125px;
  bottom: 30px;
  padding: 0 24px;
  flex: 1;
  justify-content: space-between;
`;

