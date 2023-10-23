import { useNavigation, useRoute } from "@react-navigation/native";
import {BtnVoltar, BtnVoltarTexto, Container, Context, DivImagem, Header, Illustration, SubTitleHeader, SubTitleHeaderBold, TitleHeader, TitleHeaderContext} from './styles';

import ilustratorDentroDieta from '@assets/good.png';
import ilustratorForaDieta from '@assets/bad.png';

type RoutesParamsProps = {
  type: "PRIMARY" | "SECONDARY"
}

export function RefeicaoSalvo(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.navigate('home');
    //navigation.navigate('refeicao');
  }

  const route = useRoute();

  const { type } = route.params as RoutesParamsProps;

  const titleDentroDieta = 'Continue Assim!';
  const subtitleDentroDieta1 = 'Você continua ';
  const subtitleDentroDieta2 = 'dentro da dieta';
  const subtitleDentroDieta3 = '. Muito bem!';
  const titleForaDieta = 'Que pena!';
  const subtitleForaDieta1 = 'Você ';
  const subtitleForaDieta2 = 'saiu da dieta ';
  const subtitleForaDieta3 = 'dessa vez, mas continue se esforçando e não desista!';

  return(
    <Container>
      <Context>
        <Header>
          <TitleHeader type={type}>{type === 'PRIMARY' ? titleDentroDieta : titleForaDieta}</TitleHeader>
          <TitleHeaderContext>
            <SubTitleHeader>{type === 'PRIMARY' ? subtitleDentroDieta1 : subtitleForaDieta1}
            <SubTitleHeaderBold>{type === 'PRIMARY' ? subtitleDentroDieta2 : subtitleForaDieta2}</SubTitleHeaderBold>
            {type === 'PRIMARY' ? subtitleDentroDieta3 : subtitleForaDieta3}</SubTitleHeader>
          </TitleHeaderContext>
        </Header>
        <DivImagem>
          <Illustration source={type === 'PRIMARY' ? ilustratorDentroDieta : ilustratorForaDieta}/>
        </DivImagem>
        <BtnVoltar onPress={handleGoBack}>
          <BtnVoltarTexto>Ir para a página inicial</BtnVoltarTexto>
        </BtnVoltar>
      </Context>
    </Container>
  );
}