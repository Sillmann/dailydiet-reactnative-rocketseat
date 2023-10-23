import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { refeicoesGetAll } from "@storage/refeicao/refeicaoGetAll";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { TouchableOpacityProps, ViewProps } from "react-native";
import { Container, LineVertical, StatusRefeicao, statusRefeicaoStyleProps, TextHora, TextNomeRefeicao } from "./style";

type Props = TouchableOpacityProps & {
  id: number;
  hora: string;
  nomeRefeicao: string;
  type?: statusRefeicaoStyleProps;  

}

export function CardListRefeicoes({hora, id,  nomeRefeicao, type = 'PRIMARY', ...rest} : Props){

  const navigation = useNavigation();

  async function handleEditarRefeicao(id: number){
    
    let dataRefeicao: string = "";
    let refeicaoSelecionada = {};
    const refeicoes = await refeicoesGetAll();
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

    navigation.navigate('descricao', {
      id: id,
      title: dataRefeicao,
      refeicao: refeicaoSelecionada.refeicao,
      descricao: refeicaoSelecionada.descricao,
      hora: refeicaoSelecionada.hora,
      dentroDieta: refeicaoSelecionada.dentroDieta,
      type: refeicaoSelecionada.type  
    });
    
  }

  return (
    <Container onPress={() => handleEditarRefeicao(id)}>
      <TextHora>{hora}</TextHora>
      <LineVertical />
      <TextNomeRefeicao>{nomeRefeicao}</TextNomeRefeicao>
      <StatusRefeicao type={type} />
    </Container>
  );
}