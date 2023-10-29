import AsyncStorage from "@react-native-async-storage/async-storage";

// import { MealStorageDTO } from './types/MealStorageDTO';
// import { MealsSectionDTO } from './types/MealsSectionDTO';

// function orderKeys(a: string, b: string) {
// 	const previousDate = a.substring(a.length - 10, a.length);
// 	const nextDate = b.substring(b.length - 10, b.length);

// 	const [previousDay, previousMonth, previousYear] = previousDate.split('/').map(Number);
// 	const [nextDay, nextMonth, nextYear] = nextDate.split('/').map(Number);

// 	const previousDateInDays = previousYear * 365 + (previousMonth * 30) + previousDay;
// 	const nextDateInDays = nextYear * 365 + (nextMonth * 30) + nextDay;

// 	if (previousDateInDays < nextDateInDays) {

// 		return 1;
// 	}

// 	if (previousDateInDays > nextDateInDays) {

// 		return -1;
// 	}

// 	return 0;
// }

type MealStorageDTO = {
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

function orderKeys(a: string, b: string) {
	const previousDate = a.substring(a.length - 10, a.length);
	const nextDate = b.substring(b.length - 10, b.length);

	const [previousDay, previousMonth, previousYear] = previousDate.split('/').map(Number);
	const [nextDay, nextMonth, nextYear] = nextDate.split('/').map(Number);

	const previousDateInDays = previousYear * 365 + (previousMonth * 30) + previousDay;
	const nextDateInDays = nextYear * 365 + (nextMonth * 30) + nextDay;

	if (previousDateInDays < nextDateInDays) {

		return 1;
	}

	if (previousDateInDays > nextDateInDays) {

		return -1;
	}

	return 0;
}


export async function getSection() {
	
	try {
		const knownKeys = await AsyncStorage.getAllKeys();

    console.log('knownKeys');
    console.log(knownKeys);
    // ["@dailyDiet:idrefeicao", "@dailyDiet:refeicoes-28/10/2023"]


		// const keys = knownKeys.slice(0, knownKeys.length);
		// keys.sort(orderKeys);
		const storage = await AsyncStorage.multiGet(knownKeys);

    console.log('storage');
    console.log(storage);
    // [["@dailyDiet:idrefeicao", "{\"id\":1}"], ["@dailyDiet:refeicoes-28/10/2023", "[{\"title\":\"28/10/2023\",\"data\":[{\"hour\":\"07:00\",\"id\":1,\"name\":\"Cafe\",\"description\":\"Xxxx\",\"diet\":\"S\",\"date\":\"28/10/2023\"}]}]"]]

    let allMealsByDay: MealsSectionDTO[] = [];

		storage.map((value) => {
			const mealsByKey: MealStorageDTO[] = value[1] ? JSON.parse(value[1]) : [];
			
      console.log('mealsByKey');
      console.log(mealsByKey);

			const key = mealsByKey[0].date;
     
      console.log('key');
      console.log(key);

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