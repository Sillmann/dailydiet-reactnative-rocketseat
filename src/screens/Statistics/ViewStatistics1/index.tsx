// import { TouchableOpacityProps, View } from 'react-native';
import { Container, 
        //  cardEstatisticaStyleProps, 
        //  IconArrowUpRight, 
         TextPercentagem, 
         DivTexts, 
         TextMensagem } from "./styles";

type Props = {
  infoNum: string,
  infoText: string;
}  
         
export function ViewStatistics1({infoNum, infoText}: Props){
  return (
    <Container>
      <DivTexts>
        <TextPercentagem>{infoNum}</TextPercentagem>
        <TextMensagem>{infoText}</TextMensagem>
      </DivTexts>
    </Container>
  );
}