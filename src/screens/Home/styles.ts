import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_100};
  font-size: 32px;
` 
