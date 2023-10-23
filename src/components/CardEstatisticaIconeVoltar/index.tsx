import { Alert, TouchableOpacityProps, View } from 'react-native';
import { Container, IconArrowLeft, TextPercentagem, DivTexts, TextMensagem, cardEstatisticaStyleIconeVoltarProps, AreaSegura, BackButton } from "./styles";

import { useNavigation } from '@react-navigation/native';


type Props = TouchableOpacityProps & {
  type?: cardEstatisticaStyleIconeVoltarProps;
  percentagem: Number;
}

export function CardEstatisticaIconeVoltar({percentagem, type = 'PRIMARY', ...rest}: Props){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home');
  }

  return (
    <Container type={type} {...rest}>
      <AreaSegura>
      <BackButton onPress={handleGoBack}>
        <IconArrowLeft
            type={type}        /> 
      </BackButton>      
      <DivTexts>
        <TextPercentagem>{percentagem}%</TextPercentagem>
        <TextMensagem>das refeições dentro da dieta</TextMensagem>
      </DivTexts>
      </AreaSegura>
    </Container>
  );
}