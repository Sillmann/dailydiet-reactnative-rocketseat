import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

export async function  refeicaoRemoveById(id: number, title: string){

  console.log('id');
  console.log(id);
  console.log(title);


  const storage = await mealGetAll();
  console.log(storage);

  const filtered = storage.filter( item  => item.title !== title);
  console.log(filtered);

  const meals = JSON.stringify(filtered);

  console.log(meals);

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
    
}