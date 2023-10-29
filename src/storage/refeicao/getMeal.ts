import { mealGetByDate } from "@storage/refeicao/mealGetByDate";

export async function getMeal(dateTime: string) {

	try {
		const [date, hour] = dateTime.split('-');
		const allMealsByDate = await mealGetByDate(date);

		// console.log('dateTime');
		// console.log(dateTime);

		const specificMeal = allMealsByDate.find(meal => meal.date === date && meal.hour === hour);

		// console.log('specificMeal');
		// console.log(specificMeal);

		return specificMeal;

	} catch (error) {
        
		throw error;
	}
}