import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICOES_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

type mealUpdateProps = {
  title: string;
  hour: string, 
  id: number,
  name: string, 
  description: string;          
  diet: string
}

export async function mealUpdate({title, 
                                  hour, 
                                  id, 
                                  name, 
                                  description, 
                                  diet }: mealUpdateProps){

  try {

        const storage = await mealGetAll();
       
        // console.log(storage);
        // [{"data": [[Object]], "title": "28/10/2023"}]

        storage.map(obj => {

          obj.data.map(item => {

            // console.log(item);
            //{"description": "Feijoada ", "diet": "N", "hour": "12:00", "id": 2, "name": "Almoço "}
            if (item.id === id) {
              
              obj.title = title,

              item.hour = hour,
              item.name = name,
              item.description = description,
              item.diet = diet

            }

          });
          
        }); 
        
        const meals = JSON.stringify(storage);

        await AsyncStorage.setItem(REFEICOES_COLLECTION, meals);              
   
  } catch (error) {
    throw error;
  }

}