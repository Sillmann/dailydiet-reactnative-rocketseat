import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

type mealProps = {
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: boolean,
}

export async function mealGetByDate(date: string){
  try {
    const storage = await AsyncStorage.getItem(`${ REFEICOES_COLLECTION }-${ date }`);

    const meals: mealProps[] = storage ? JSON.parse(storage) : [];

		return meals;

  } catch (error) {
    throw error;
  }
}