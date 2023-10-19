import styled from 'styled-components/native';

export const Container = styled.View`
  width: 327px;
  height: 102px;
  border-radius: 8px;
  /* flex-direction: row; */
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`
export const Percentual = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const InfoTexto = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`


