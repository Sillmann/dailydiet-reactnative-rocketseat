import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BASE.GRAY[700]};
  align-items: center;
`;

export const DivTextos = styled.View`
  margin-top: 100px;
  align-items: center;
`;

export const DivTexto1 = styled.Text`
  color: ${({ theme })=>theme.COLORS.BRAND.GREEN.DARK};
  font-size: ${({ theme })=>theme.FONT_SIZE.TITLE_XS}px;  
`
export const DivTexto2 = styled.Text`
  color: ${({ theme })=>theme.COLORS.BASE.GRAY[100]};
  font-size: ${({ theme })=>theme.FONT_SIZE.TITLE_XS}px;  
  margin-top: 10px;
`
export const ImgBad = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
