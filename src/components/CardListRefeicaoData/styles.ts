import styled from "styled-components/native";


export const Container = styled.View`
  margin-top: 32px;
  flex: 1 ;
`;

export const DataRefeicao = styled.Text`
  margin-bottom: 12px ;
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
