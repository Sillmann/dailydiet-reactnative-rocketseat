import AsyncStorage from "@react-native-async-storage/async-storage";

type MealStorageDTO = {
	id: number;
	name: string;
	description: string;
	date: string;
	time: string;
	diet: string;
}

export type MealsSectionDTO = {
	title: string;
	data: MealStorageDTO[];
}

export async function getSection() {
	
	try {
		const knownKeys = await AsyncStorage.getAllKeys();

		const storage = await AsyncStorage.multiGet(knownKeys);

    let allMealsByDay: MealsSectionDTO[] = [];

		storage.map((value) => {
			const mealsByKey: MealStorageDTO[] = value[1] ? JSON.parse(value[1]) : [];
			
			const key = mealsByKey[0].date;
     
			allMealsByDay = [...allMealsByDay, {
				title: key,
				data: mealsByKey
			}]
		});

		return allMealsByDay;
        
	} catch (error) {

		throw error;
	}
}