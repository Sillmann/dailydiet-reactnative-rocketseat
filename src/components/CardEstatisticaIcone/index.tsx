import { TouchableOpacityProps, View } from 'react-native';
import { Container, IconArrowUpRight, TextPercentagem, DivTexts, TextMensagem, cardEstatisticaIconeStyleProps } from "./styles";


type Props = TouchableOpacityProps & {
  type?: cardEstatisticaIconeStyleProps;
  percentagem: number;
}

export function CardEstatisticaIcone({percentagem, type = 'PRIMARY', ...rest}: Props){
  
  return (
    <Container type={type} {...rest}>
      
        <IconArrowUpRight 
          type={type}
        />
      <DivTexts>
        <TextPercentagem>{percentagem?.toFixed(2)}%</TextPercentagem>
        <TextMensagem>das refeições dentro da dieta</TextMensagem>
      </DivTexts>
    </Container>
  );
}