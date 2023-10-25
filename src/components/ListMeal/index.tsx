// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/refeicao/mealGetAll";
// import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { TouchableOpacityProps, ViewProps } from "react-native";

import { Container, 
         LineVertical, 
         StatusRefeicao, 
         statusRefeicaoStyleProps, 
         TextHora, 
         TextNomeRefeicao } from "./style";

type Props = TouchableOpacityProps & {
  id: number;
  hour: string;
  name: string;
  type?: statusRefeicaoStyleProps;  

}

export function ListMeal({hour, id, name, type, ...rest} : Props){

  const navigation = useNavigation();

  async function handleEditarRefeicao(id: number){
    
    let dataRefeicao: string = "";
    let refeicaoSelecionada = {};
    const refeicoes = await mealGetAll();
    const newRefeicoes = JSON.stringify(refeicoes);
    // console.log('refeicoes', newRefeicoes);
    
    const refeicoesFiltradas = refeicoes.map(refeicao => {
      return refeicao.data.filter(refeicaoData => refeicaoData.id !== id);
    });
    
    refeicoes.forEach(refeicao => {
      refeicao.data.forEach(refeicaoData => {
        if(refeicaoData.id === id){
          dataRefeicao = refeicao.title; 
          refeicaoSelecionada = refeicaoData;
          return;
        }
      })
    });    
    
    //console.log('refeicoesFiltradas', refeicoesFiltradas);
    // console.log('dataRefeicao', dataRefeicao);
    // console.log('refeicaoSelecionada', refeicaoSelecionada);
    // console.log('refeicaoSelecionadaDescricao', refeicaoSelecionada?.descricao);

    navigation.navigate('detmeal', {
      id: id,
      title: dataRefeicao,
      name: refeicaoSelecionada.name,
      description: refeicaoSelecionada.description,
      hour: refeicaoSelecionada.hour,
      diet: refeicaoSelecionada.diet
    });
    
  }

  return (
    <Container onPress={() => handleEditarRefeicao(id)}>
      <TextHora>{hour}</TextHora>
      <LineVertical />
      <TextNomeRefeicao>{name}</TextNomeRefeicao>
      <StatusRefeicao type={type} />
    </Container>
  );
}