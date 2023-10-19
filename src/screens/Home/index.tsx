import { Text, View } from 'react-native';

import { Container, Title } from './styles';
import { Header } from '@components/Header';
import { Info } from '@components/Info';

export function Home() {
  return (
    <Container>

      <Header />
      <Info 
        percentual="98,99%"
        infotexto="das refeições dentro da dieta"
      />
      {/* <Title>
        Desafio02
      </Title> */}

    </Container>
  );
}