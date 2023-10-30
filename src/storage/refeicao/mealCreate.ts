import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
<<<<<<< HEAD

type mealProps = {  
=======
import { mealGetByDate } from '@storage/refeicao/mealGetByDate';


type mealProps = {
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a
  id: number,
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: string,
}

export async function mealCreate({ id, name, description, date, hour, diet }: mealProps){
  try {
<<<<<<< HEAD

    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: mealProps[] = storage ? JSON.parse(storage) : []; 

    let newId = 0;

    storages.map(item => {
      if ( item.id > newId )
        newId = item.id;
    })

    newId = newId + 1;

    const newItem = {
=======
    
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
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a
        id:newId,
        name,
        description,
        date,
        hour,
        diet
<<<<<<< HEAD
      }

    const newStorage = JSON.stringify( [...storages, newItem] );
    console.log('newStorage');
    console.log(newStorage);

    await AsyncStorage.setItem(REFEICOES_COLLECTION, newStorage);    
=======
    }
       
    const newDados = [...allmeal, newMeal];
    const storage = JSON.stringify(newDados);
    await AsyncStorage.setItem(`${ REFEICOES_COLLECTION }-${ date }`, storage);           
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a

  } catch (error) {
    throw error;
  }
}