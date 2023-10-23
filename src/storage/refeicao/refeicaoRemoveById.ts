import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicaoGetAll";

export async function  refeicaoRemoveById(id: number, data: string){

  const refeicoes = await refeicoesGetAll();

  const refeicoesOutrasDatas = refeicoes.filter(refeicao => refeicao.title !== data);
  const refeicaoData = refeicoes.find(refeicao => refeicao.title === data);
  const refeicaoDataFiltrada = refeicaoData.data.filter(refeicao => refeicao.id !== id);

  if(refeicaoDataFiltrada.length > 0){

    const objDataFiltrada = {
      title: data,
      data: refeicaoDataFiltrada
    }

    const newRefeicao = [...refeicoesOutrasDatas, objDataFiltrada];
    
    const storage = JSON.stringify(newRefeicao);
    await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);
  }else{
    const newRefeicao = refeicoesOutrasDatas;
    const storage = JSON.stringify(newRefeicao);
    await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);

  }
    
}