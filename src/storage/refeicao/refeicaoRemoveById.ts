import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type mealProps = {
  id: number,
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: boolean,
}

export async function  refeicaoRemoveById(id: number){

  try {

    console.log('id');
    console.log(id);

    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: mealProps[] = storage ? JSON.parse(storage) : []; 

    const filtered = storages.filter(item => item.id !== id)

    await AsyncStorage.setItem(REFEICOES_COLLECTION, JSON.stringify(filtered));

  } catch (error) {
    throw error;
  }
    
}