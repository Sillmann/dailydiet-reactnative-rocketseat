import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Container, 
         LineVertical, 
         StatusRefeicao, 
         statusRefeicaoStyleProps, 
         TextHora, 
         TextNomeRefeicao } from "./style";

type Props = TouchableOpacityProps & {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  type?: statusRefeicaoStyleProps;  
}

export function ListMeal({id, name, description, date, hour, type, ...rest} : Props){

  const navigation = useNavigation();

  async function handleEditarRefeicao(){
    
    navigation.navigate('detmeal', {
        pId: id,
        pName: name,
        pDescription: description,
        pDate: date,
        pHour: hour,
        pDiet: type
      });
  }

  return (
    <Container onPress={() => handleEditarRefeicao()}>
      <TextHora>{hour}</TextHora>
      <LineVertical />
      <TextNomeRefeicao>{name}</TextNomeRefeicao>
      <StatusRefeicao type={type} />
    </Container>
  );
}