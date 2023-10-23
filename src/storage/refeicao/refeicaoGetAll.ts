import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type refeicaoProps = {  
  title: string,
      data: [
        { 
          hora: string, 
          refeicao: string, 
          descricao: string;          
          dentroDieta: boolean,
          type: "PRIMARY" | "SECONDARY"
        }
      ]
}

function converterData(data: string){
  const newData = data.split('/').reverse().join('-');
  return new Date(newData);

}

export async function refeicoesGetAll(){
  try {
    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: refeicaoProps[] = storage ? JSON.parse(storage) : []; 
    
    const refeicoes = storages.length > 0 ? storages.sort((a,b) => converterData(a.title) < converterData(b.title)) : [];
     
    return refeicoes;    
    
  } catch (error) {
    throw error;
  }
}