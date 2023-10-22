import { TouchableOpacityProps } from 'react-native';
import { Container, Percentual, Back } from './styles';
import backPng from '@assets/back.png';
import { useNavigation } from '@react-navigation/native';

type Props = TouchableOpacityProps & {
  label: String;
}

export function CardHeaderNovaRefeicao({label, ...rest}: props){

  const navigation = useNavigation();

  function handleGoBack(){
    props.navigation.goBack;
  }

  return(
    <Container {...rest}
      onPress={handleGoBack}
    >
      <Back source={backPng} />
      <Percentual>{label}</Percentual>
    </Container>
  )
}
