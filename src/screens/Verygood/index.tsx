import { Container, DivTextos, DivTexto1, DivTexto2, Good } from './styles';
import verygoodPng from '@assets/verygood.png';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function Verygood() {

  
  const navigation = useNavigation();

  function handleHome(){
    navigation.navigate('home');
  }

  return (
    <Container>
      
      <DivTextos>

      <DivTexto1>
        Continue assim!
      </DivTexto1>

      <DivTexto2>
        Você continua dentro da dieta. Muito bem!
      </DivTexto2>

      </DivTextos>

      <Good source={verygoodPng} />      

      <Button
        oTexto="Ir para a página inicial"
        onPress={handleHome}
      />

    </Container>
  );
}  
