import AsyncStorage from '@react-native-async-storage/async-storage';
import { REFEICAO_COLLECTION } from '@storage/storageConfig';

export async function refeicaoGetAll(){
  try{
   const storage = await AsyncStorage.getItem(REFEICAO_COLLECTION);
   const refeicoes: string[] = storage ? JSON.parse(storage) : [];
   return refeicoes;
  }catch(error){
    throw error;
  }
}