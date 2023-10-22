import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  align-items: center;
`;

export const DivTextos = styled.View`
  margin-top: 100px;
  align-items: center;
`;

export const DivTexto1 = styled.Text`
  color: ${({ theme })=>theme.COLORS.GREEN_DARK};
  font-size: ${({ theme })=>theme.FONT_SIZE.XL}px;  
`
export const DivTexto2 = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;  
  margin-top: 10px;
`
export const Bad = styled.Image`
  width: 224px;
  height: 288px;
  margin-top: 12px;
  margin-bottom: 12px;
`;
