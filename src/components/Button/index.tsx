import { Container, ButtonTexto } from "./styles";

type Props = {
  oTexto: string;
}  

export function Button({ oTexto }: Props ){
  return(
    <Container>
      <ButtonTexto>
         {oTexto}
      </ButtonTexto>
    </Container>
  )
}