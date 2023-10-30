import { mealGetByDate } from "@storage/refeicao/mealGetByDate";

export async function getMeal(dateTime: string) {

	try {
		const [date, hour] = dateTime.split('-');
		const allMealsByDate = await mealGetByDate(date);

		const specificMeal = allMealsByDate.find(meal => meal.date === date && meal.hour === hour);

		return specificMeal;

	} catch (error) {
        
		throw error;
	}
}