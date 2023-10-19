import { Container, Percentual, InfoTexto } from './styles';

type Props = {
  percentual: string;
  infotexto: string;
}  


export function Info({ percentual, infotexto }: Props ){

  return(
    <Container>

      <Percentual>
        {percentual}
      </Percentual>

      <InfoTexto>
        {infotexto}
      </InfoTexto>

    </Container>
  )
}