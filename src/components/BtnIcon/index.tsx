import { useNavigation } from "@react-navigation/native";
import { Container, PlusIcon, TextBtn } from "./styles";

export function BtnIcon(){

  const navigation = useNavigation();

  function handleAddNewRefeicao(){
    // navigation.navigate('salvo', {type : 'SECONDARY'})
    navigation.navigate('refeicao');
  }

  return (
    <Container onPress={handleAddNewRefeicao}>
      <PlusIcon />
      <TextBtn>Nova refeição</TextBtn>
    </Container>
  );
}