import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";

export type MealProps = {
  id: number,
  name: string, 
  description: string, 
  date: string, 
  hour: string, 
  diet: string
};


export async function mealsRetrieve(): Promise<MealProps[]> {

  try {
    const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);

    const meals: MealProps[] = storage ? JSON.parse(storage) : [];

    console.log('mealsRetrieve');
    console.log(mealsRetrieve);

    return meals;

  } catch (err) {

    throw(err);

  }
}