import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { mealGetAll } from "./mealGetAll";

type mealProps = {
  title: string;
  hour: string, 
  id: number,
  name: string, 
  description: string;          
  diet: boolean
}

export async function mealCreate({title, hour, id, name, description, diet }: mealProps){
  try {
    
    const allmeal = await mealGetAll();   

    console.log('teste');
   
    const newMeal = {
      title,
      data: [{
        hour,
        id,
        name,
        description,
        diet
      }]
    }

    // if(allmeal.length === 0){

    //   const newMeal = {
    //     title,
    //     data: [{
    //       hour,
    //       id,
    //       name,
    //       description,
    //       diet
    //     }]
    //   }
    //   const storage = JSON.stringify([newMeal]);
    //   await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
    // }else{
    //   const existData = allmeal.filter(f => f.title === title);
    //   if(existData.length > 0){
    //     const items = allmeal.filter(a => a.title !== title);
    //     let dataFiltered = allmeal.find(a => a.title === title);
        
    //     dataFiltered?.data.push({
    //       hour,
    //       id,
    //       name,
    //       description,
    //       diet
    //     })
    //     // console.log('dataFiltered: ', dataFiltered[0]);
        
    //     const newMeals = [...items, dataFiltered];
    //     // console.log(novasRefeicoes);
    //     const storage = JSON.stringify(newMeals);
    //     await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
        
    //   }else{
    //     const newMeal = {
    //       title,
    //       data: [{
    //         hour,
    //         id,
    //         name,
    //         description,
    //         diet
    //       }]
    //     }
        
        const newDados = [...allmeal, newMeal];
        const storage = JSON.stringify(newDados);
        console.log(storage);
        await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);           
        
    //   }

    // }
    const newId = {id: id};
    const idStorage = JSON.stringify(newId);
    await AsyncStorage.setItem(IDENTIFICADOR_COLLECTION, idStorage);
  } catch (error) {
    throw error;
  }

  

}