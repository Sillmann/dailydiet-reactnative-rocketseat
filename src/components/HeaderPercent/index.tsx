import { Alert, TouchableOpacityProps, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, 
         TextPercentagem, 
         DivTexts, 
         TextMensagem, 
        //  BackButton 
        } from "./styles";


type Props = {
  infoPercent: number;
}  

export function HeaderPercent({ infoPercent }: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home');
  }

  return (
    <Container>
      
      <DivTexts>
        <TextPercentagem>{infoPercent}%</TextPercentagem>
        <TextMensagem>das refeições dentro da dieta</TextMensagem>
      </DivTexts>
      
    </Container>
  );
}