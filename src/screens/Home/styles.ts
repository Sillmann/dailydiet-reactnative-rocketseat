import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 0 24px;
`;

export const ContainerMeat = styled.View`
  background-color: ${({theme}) => theme.COLORS.BASE.GRAY[700] };
  margin-top: 32px;
`;

export const Title = styled.Text`
  color: ${({ theme })=>theme.COLORS.BASE.GRAY[100]};
  font-size: 16px;
`
