import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICOES_COLLECTION } from "@storage/storageConfig";
// import { mealGetAll } from "./mealGetAll";
import { mealGetByDate } from '@storage/refeicao/mealGetByDate';

type mealProps = {
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: boolean,
}

export async function mealUpdate({ name, 
                                   description, 
                                   date, 
                                   hour, 
                                   diet  }: mealProps){

  try {

    const storage = await mealGetByDate( date );      
    
    const mealIndex = storage.findIndex((value) => value.hour === hour);

		// if (mealIndex === -1) {
		// 	await createMeal(updatedMeal);
		// 	await removeMeal(dateTime);

		// 	return;
		// }

    const newMeal = {
      name,
      description,
      date,
      hour,
      diet
    }  

		storage[mealIndex] = newMeal;

    console.log('newMeal');
    console.log(newMeal);

		// AsyncStorage.setItem(`${ MEAL_COLLECTION }-${ date }`, JSON.stringify(dailyMeals));
    await AsyncStorage.setItem(`${ REFEICOES_COLLECTION }-${ date }`, JSON.stringify(storage));           
    


        // const storage = await mealGetAll();
       
        // // console.log(storage);
        // // [{"data": [[Object]], "title": "28/10/2023"}]

        // storage.map(obj => {

        //   obj.data.map(item => {

        //     // console.log(item);
        //     //{"description": "Feijoada ", "diet": "N", "hour": "12:00", "id": 2, "name": "Almoço "}
        //     if (item.id === id) {
              
        //       obj.title = title,

        //       item.hour = hour,
        //       item.name = name,
        //       item.description = description,
        //       item.diet = diet

        //     }

        //   });
          
        // }); 
        
        // const meals = JSON.stringify(storage);

        // await AsyncStorage.setItem(REFEICOES_COLLECTION, meals);              
      
  } catch (error) {
    throw error;
  }

}