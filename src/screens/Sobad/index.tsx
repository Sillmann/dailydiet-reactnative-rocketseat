import { Container, DivTextos, DivTexto1, DivTexto2, Bad } from './styles';
import sobadPng from '@assets/sobad.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Sobad() {

  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('home');
  }

  return (
    <Container>
      
      <DivTextos>

      <DivTexto1>
        Que pena!
      </DivTexto1>

      <DivTexto2>
        Você saiu da dieta dessa vez, mas continue
      </DivTexto2>

      <DivTexto2>
        se esforçando e não desista!
      </DivTexto2>

      </DivTextos>

      <Bad source={sobadPng} />      

      <Button
        oTexto="Ir para a página inicial"
        onPress={handleHome}
      />

    </Container>
  );
}  
