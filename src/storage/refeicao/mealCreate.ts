import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type mealProps = {  
  id: number,
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: string,
}

export async function mealCreate({ id, name, description, date, hour, diet }: mealProps){
  try {

    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: mealProps[] = storage ? JSON.parse(storage) : []; 

    let newId = 0;

    storages.map(item => {
      if ( item.id > newId )
        newId = item.id;
    })

    newId = newId + 1;

    const newItem = {
        id:newId,
        name,
        description,
        date,
        hour,
        diet
      }

    const newStorage = JSON.stringify( [...storages, newItem] );
    console.log('newStorage');
    console.log(newStorage);

    await AsyncStorage.setItem(REFEICOES_COLLECTION, newStorage);    

  } catch (error) {
    throw error;
  }
}