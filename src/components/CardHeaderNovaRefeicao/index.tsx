import { TouchableOpacityProps } from 'react-native';
import { Container, Percentual, Back } from './styles';
import backPng from '@assets/back.png';

type Props = TouchableOpacityProps & {
  label: String;
}

export function CardHeaderNovaRefeicao({label, ...rest}: Props){
  return(
    <Container {...rest}>
      <Back source={backPng} />
      <Percentual>{label}</Percentual>
    </Container>
  )
}
