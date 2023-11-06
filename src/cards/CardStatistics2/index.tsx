import {  Container, 
          InfoText, 
          Content, 
          InfoNum } from "./styles";

type Props = {
  infoNum: string,
  infoText: string;
  color: string;
}  
   
export function CardStatistics2({infoNum, infoText, color}: Props){
return (
  <Container type={color}>
    <Content>
      <InfoText>{infoText}</InfoText>
      <InfoNum>{infoNum}</InfoNum>
    </Content>
  </Container>
);
}