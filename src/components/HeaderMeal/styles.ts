import styled, {css} from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY[500]};  
  height: 100px;
  /* margin-top: 0px; */
  flex-direction: row;
`;

export const BtnBack = styled.TouchableOpacity`
  margin-left: 5%;
  margin-top: 48px; 
`;

export const ImgBack = styled.Image`
  width: 24px;
  height: 24px;
`;

export const LblBack = styled.Text`
  margin-left: 20%;
  margin-top: 48px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme })=>theme.FONT_SIZE.TITLE_M}px;
`;
