import { Container, 
         TextPercentagem, 
         DivTexts, 
         TextMensagem } from "./styles";

type Props = {
  infoNum: string,
  infoText: string;
}  
         
export function CardStatistics1({infoNum, infoText}: Props){
  return (
    <Container>
      <DivTexts>
        <TextPercentagem>{infoNum}</TextPercentagem>
        <TextMensagem>{infoText}</TextMensagem>
      </DivTexts>
    </Container>
  );
}