// import { TouchableOpacityProps, View } from 'react-native';
import { Container, 
  //  cardEstatisticaStyleProps, 
  //  IconArrowUpRight, 
   InfoText, 
   Content, 
   InfoNum } from "./styles";

type Props = {
infoNum: string,
infoText: string;
color: string;
}  
   
export function ViewStatistics2({infoNum, infoText, color}: Props){
return (
  <Container type={color}>
    <Content>
      <InfoText>{infoText}</InfoText>
      <InfoNum>{infoNum}</InfoNum>
    </Content>
  </Container>
);
}