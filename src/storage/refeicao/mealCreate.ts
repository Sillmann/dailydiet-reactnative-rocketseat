import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
import { mealGetByDate } from '@storage/refeicao/mealGetByDate';


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
    
    const storageid = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storageids: mealProps[] = storageid ? JSON.parse(storageid) : []; 

    let newId = 0;

    storageids.map(item => {
      if ( item.id > newId )
        newId = item.id;
    })

    newId = newId + 1;

    const allmeal = await mealGetByDate( date );   

    const newMeal = {
        id:newId,
        name,
        description,
        date,
        hour,
        diet
    }
       
    const newDados = [...allmeal, newMeal];
    const storage = JSON.stringify(newDados);
    await AsyncStorage.setItem(`${ REFEICOES_COLLECTION }-${ date }`, storage);           

  } catch (error) {
    throw error;
  }

  

}