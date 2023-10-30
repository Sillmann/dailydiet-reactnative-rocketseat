import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type meallProps = {  
  id: number,
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: boolean,
}

function converterData(data: string){
  const newData = data.split('/').reverse().join('-');
  return new Date(newData);

}

export async function mealGetAll(){
  try {
    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: meallProps[] = storage ? JSON.parse(storage) : []; 
    
    const refeicoes = storages.length > 0 ? storages.sort((a,b) => converterData(a.title) < converterData(b.title)) : [];
     
    return refeicoes;    
    
  } catch (error) {
    throw error;
  }
}