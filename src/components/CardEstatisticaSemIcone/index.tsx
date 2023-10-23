import { TouchableOpacityProps, View } from 'react-native';
import { Container, cardEstatisticaStyleProps, IconArrowUpRight, TextPercentagem, DivTexts, TextMensagem } from "./styles";


type Props = TouchableOpacityProps & {
  type?: cardEstatisticaStyleProps;
  valor: Number;
  textoEmbaixo: string;
}

export function CardEstatisticaSemIcone({valor, type = 'GRAY', textoEmbaixo, ...rest}: Props){
  return (
    <Container type={type} {...rest}>
      <DivTexts>
        <TextPercentagem>{valor}</TextPercentagem>
        <TextMensagem>{textoEmbaixo}</TextMensagem>
      </DivTexts>
    </Container>
  );
}