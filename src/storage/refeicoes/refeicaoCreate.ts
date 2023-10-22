import AsyncStorage from '@react-native-async-storage/async-storage';
import { refeicaoGetAll } from './refeicaoGetAll';
import { REFEICAO_COLLECTION } from '@storage/storageConfig';
export async function refeicaoCreate(newRefeicao: string ){
  try{
  
   const storedRefeicao = await refeicaoGetAll();
   
   const storage = JSON.stringify([...storedRefeicao,newRefeicao]); 
   
   //await AsyncStorage.setItem('key'); ( antes de storageConfig.ts )
   await AsyncStorage.setItem(REFEICAO_COLLECTION,storage);
  }catch(error){
    throw error;
  }
}