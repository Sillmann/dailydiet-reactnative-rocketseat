import { Alert, TouchableOpacityProps, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Container, 
        //  IconArrowLeft, 
         TextPercentagem, 
         DivTexts, 
         TextMensagem, 
        //  cardEstatisticaStyleIconeVoltarProps, 
        //  AreaSegura, 
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
      {/* <AreaSegura> */}
      {/* <BackButton onPress={handleGoBack}>
        <IconArrowLeft
            type={type}        /> 
      </BackButton>       */}
      <DivTexts>
        <TextPercentagem>{infoPercent}%</TextPercentagem>
        <TextMensagem>das refeições dentro da dieta</TextMensagem>
      </DivTexts>
      {/* </AreaSegura> */}
    </Container>
  );
}