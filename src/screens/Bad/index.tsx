import { useNavigation } from '@react-navigation/native';

import { Button } from '@components/Button';

import badPng from '@assets/bad.png';

import { Container, 
         DivTextos, 
         DivTexto1, 
         DivTexto2, 
         ImgBad } from './styles';

export function Bad() {

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

      <ImgBad source={badPng} />      

      <Button
        oTexto="Ir para a página inicial"
        onPress={handleHome}
      />

    </Container>
  );
}  
