import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  align-items: center;
  /* justify-content: center; */
`;

export const ContainerRefeicoes = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: 16px;
`

export const Title2 = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: ${({ theme })=>theme.FONT_SIZE.XL}px;

`

export const ContainerListarRefeicoes = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  margin-top: 16px;
  flex: 1;
  width: 327px;
`;

// export const DataRefeicao = styled.Text`
//   color: ${({ theme })=>theme.COLORS.GRAY_100};
//   font-size: 16px;

  /* margin-bottom: 12px;

  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme })=>theme.theme.FONT_SIZE.XL}px; */
// `;
