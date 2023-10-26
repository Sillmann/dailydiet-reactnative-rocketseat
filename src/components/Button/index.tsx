import { Container, 
         ButtonTexto,
         Img } from "./styles";

import editPng from '@assets/edit.png';
import trashPng from '@assets/trash.png';

type Props = {
  oTexto: string;
  type?: string;
}  

export function Button({ oTexto, type, ...rest }: Props ){
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