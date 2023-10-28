import { MaterialIcons } from '@expo/vector-icons';

import { Container, 
         ButtonTexto,
         Icon } from "./styles";

type Props = {
  oTexto: string;
  type?: string;
  icon: keyof typeof MaterialIcons.glyphMap;
}  

export function Button({ oTexto, type, icon, ...rest }: Props ){
  return(
    <Container type={type} {...rest}>
      <Icon 
        name={icon}
        type={type}
      />
      <ButtonTexto type={type}>
         {oTexto}
      </ButtonTexto>
    </Container>
  )
}