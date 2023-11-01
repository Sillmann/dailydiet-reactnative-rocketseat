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

export async function mealUpdate({ id,
                                   name, 
                                   description, 
                                   date, 
                                   hour, 
                                   diet  }: mealProps){

  try {

    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: mealProps[] = storage ? JSON.parse(storage) : []; 

    const mealIndex = storages.findIndex((value) => value.id === id);

    const newMeal = {
      id,
      name,
      description,
      date,
      hour,
      diet
    }  

		storages[mealIndex] = newMeal;

    // console.log('updateMeal');
    // console.log(newMeal);

		await AsyncStorage.setItem(REFEICOES_COLLECTION, JSON.stringify(storages));           
      
  } catch (error) {
    throw error;
  }

}