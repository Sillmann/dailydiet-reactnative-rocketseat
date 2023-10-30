import AsyncStorage from "@react-native-async-storage/async-storage";
<<<<<<< HEAD
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
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
=======
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a

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

<<<<<<< HEAD
type mealProps = {  
  id: number,
  name: string, 
  description: string;          
  date: string,
  hour: string, 
  diet: boolean,
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


=======
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a
export async function getSection() {
	
	try {

<<<<<<< HEAD
		const storage = await AsyncStorage.getItem(REFEICOES_COLLECTION);
    const storages: mealProps[] = storage ? JSON.parse(storage) : []; 		
		console.log('storages');
		console.log(storages);

		let allMealsByDay: mealProps[] = [];

		type MealStorageDTO = {
			name: string;
			description: string;
			date: string;
			time: string;
			diet: string;
		}

		storages.map(item => {
			// const mealsByKey: MealStorageDTO[] = item ? JSON.parse(item) : [];
		
			// const mealsByKey: MealStorageDTO[] = {item.name} ? JSON.parse(item[1]) : [];

			// const mealsByKey: MealStorageDTO[] = [item.name]
			// console.log('item.date');
			// console.log(item.date);

			// allMealsByDay = [...allMealsByDay, {
			// 			title: item.date,
			// 			data: [{item}]
			// 		}]

    })

		

		console.log('allMealsByDay');
		console.log(allMealsByDay);


		// const knownKeys = await AsyncStorage.getAllKeys();
    // console.log('knownKeys');
    // console.log(knownKeys);
    // ["@dailyDiet:idrefeicao", "@dailyDiet:refeicoes-28/10/2023"]


		// const keys = knownKeys.slice(0, knownKeys.length);
		// keys.sort(orderKeys);
		// const storage = await AsyncStorage.multiGet(knownKeys);
    // console.log('storage');
    // console.log(storage);
    // [["@dailyDiet:idrefeicao", "{\"id\":1}"], ["@dailyDiet:refeicoes-28/10/2023", "[{\"title\":\"28/10/2023\",\"data\":[{\"hour\":\"07:00\",\"id\":1,\"name\":\"Cafe\",\"description\":\"Xxxx\",\"diet\":\"S\",\"date\":\"28/10/2023\"}]}]"]]

    // let allMealsByDay: MealsSectionDTO[] = [];
=======
		const storage = await AsyncStorage.multiGet(knownKeys);

    let allMealsByDay: MealsSectionDTO[] = [];
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a

		// storage.map((value) => {
		// 	const mealsByKey: MealStorageDTO[] = value[1] ? JSON.parse(value[1]) : [];
			
<<<<<<< HEAD
    //   console.log('mealsByKey');
    //   console.log(mealsByKey);

		// 	const key = mealsByKey[0].date;
     
    //   console.log('key');
    //   console.log(key);

		// 	allMealsByDay = [...allMealsByDay, {
		// 		title: key,
		// 		data: mealsByKey
		// 	}]
		// });
=======
			const key = mealsByKey[0].date;
     
			allMealsByDay = [...allMealsByDay, {
				title: key,
				data: mealsByKey
			}]
		});
>>>>>>> 58dc89cd23befc99d721e5f25fee370c39976a5a

		return allMealsByDay;
        
	} catch (error) {

		throw error;
	}
}