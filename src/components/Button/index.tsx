import { Container, ButtonTexto } from "./styles";

type Props = {
  oTexto: string;
}  

export function Button({ oTexto, ...rest }: Props ){
  return(
    <Container
      {...rest}
    >
      <ButtonTexto>
         {oTexto}
      </ButtonTexto>
    </Container>
  )
}