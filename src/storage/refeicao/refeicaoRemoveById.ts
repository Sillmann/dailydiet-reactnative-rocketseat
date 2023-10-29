import AsyncStorage from "@react-native-async-storage/async-storage";
import { //IDENTIFICADOR_COLLECTION, 
          REFEICOES_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function  refeicaoRemoveById(id: number, title: string){

  try {

    const storage = await mealGetAll();

    const filtered = storage.filter( item  => item.title !== title);

    const meals = JSON.stringify(filtered);

    await AsyncStorage.setItem(REFEICOES_COLLECTION, meals);

  // const refeicoes = await mealGetAll();

  // const refeicoesOutrasDatas = refeicoes.filter(refeicao => refeicao.title !== data);
  // const refeicaoData = refeicoes.find(refeicao => refeicao.title === data);
  // const refeicaoDataFiltrada = refeicaoData.data.filter(refeicao => refeicao.id !== id);

  // if(refeicaoDataFiltrada.length > 0){

  //   const objDataFiltrada = {
  //     title: data,
  //     data: refeicaoDataFiltrada
  //   }

  //   const newRefeicao = [...refeicoesOutrasDatas, objDataFiltrada];
    
  //   const storage = JSON.stringify(newRefeicao);
  //   await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);
  // }else{
  //   const newRefeicao = refeicoesOutrasDatas;
  //   const storage = JSON.stringify(newRefeicao);
  //   await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);

  // }
} catch (error) {
  throw error;
}
    
}