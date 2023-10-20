import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 49px;
  border-radius:  6px;
  border: solid 0.5px;
  flex-direction:  row;
  align-items: center;
  margin-bottom: 8px ;
`;

export const TextNomeRefeicao = styled.Text`
  flex: 1;
  color: ${({ theme })=>theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`