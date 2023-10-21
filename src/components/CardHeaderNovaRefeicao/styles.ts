import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  height: 132px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};  
  top: 0;
  flex-direction: row;
  /* justify-content: center; */
  align-items: center;
  padding-left: 16px;
  `;

export const Percentual = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  padding-left: 50px;
`  
export const Back = styled.Image`
  width: 40px;
  height: 40px;
`;
