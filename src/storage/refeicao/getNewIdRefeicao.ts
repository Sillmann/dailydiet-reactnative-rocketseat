import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";

type IdProps = {  
  id: number
}

export async function getNewIdRefeicao(){
  try {
    const idStorage = await AsyncStorage.getItem(IDENTIFICADOR_COLLECTION);
    // console.log('idStorrage', idStorage);
    const storage : IdProps = idStorage ? JSON.parse(idStorage) : {id: 0};
    // console.log('storage', storage);
    const newID = storage.id + 1;
    // console.log('newID',newID);
   
    return newID;

    
  } catch (error) {
    console.log(error);
  }
}