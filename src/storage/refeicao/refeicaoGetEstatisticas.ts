import { mealsRetrieve } from '@storage/refeicao/mealsRetrieve';

export async function refeicaoGetEstatisticas(){

  let amount = 0;
  let amountIn = 0;
  let amountOut = 0;
  let percent = 0;
  let seq = 0;

  try {
    const allMeals = await mealsRetrieve();

		const mealsInsideTheDiet = allMeals.filter((meal) => meal.diet === 'S').length;

		let best = 0;
		let count = 0;

		allMeals.map((value) => {
			if (value.diet === 'S') {
				count++;

				if (count > best) {
					best = count;
				}

			} else {
				
				count = 0;
			}
		});

	  amountIn = mealsInsideTheDiet;
    amountOut = allMeals.length - mealsInsideTheDiet;
    amount = amountIn + amountOut;
    seq = best;
    percent = (amountIn * 100 / amount );

    return {amount, amountIn, amountOut, percent, seq};

	} catch (error) {
        
		throw error;
	}

}