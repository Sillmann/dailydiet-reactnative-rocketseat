import { mealGetAll } from "./mealGetAll";
import { getMeals } from "./getMeals";

export async function refeicaoGetEstatisticas(){

  // const [amount, setAmount] = useState(0);
  // const [amountIn, setAmountIn] = useState(30);
  // const [amountOut, setAmountOut] = useState(0);
  // const [seq, setSeq] = useState(0);

  // const fileData = await mealGetAll();
  let amount = 0;
  let amountIn = 0;
  let amountOut = 0;
  let percent = 0;
  let seq = 0;
  let sequenciaAtual = 0;

  // fileData.map(i => amount += i.data.length );
  // fileData.map(i => amountIn += i.data.filter(i => i.diet === 'S').length)

  // fileData.forEach(i => 
  //   i.data.forEach(j => {
  //     // console.log('DentroDieta: ',alimentacao.dentroDieta);
  //     if(j.diet === 'S'){
  //       sequenciaAtual += 1;        
  //       if(sequenciaAtual > seq){
  //         seq = sequenciaAtual;
  //       }
  //     }else{
  //       sequenciaAtual = 0;
  //     } 
  // })
  // )

  // amountOut = amount - amountIn;
  // percent = (amountIn * 100 / amount );

  // return {amount, amountIn, amountOut, percent, seq};

  try {
		const allMeals = await getMeals();
    // console.log(allMeals);

		const mealsInsideTheDiet = allMeals.filter((meal) => meal.diet === 'S').length;

    // console.log('mealsInsideTheDiet');
    // console.log(mealsInsideTheDiet);

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

		// // const statistics: Statistics = {
		// // 	bestSequence: best,
		// // 	mealsInsideTheDiet,
		// // 	mealsOffTheDiet: (allMeals.length - mealsInsideTheDiet)
		// // };

		// // return statistics;
    
    // setAmountIn(10);
    // setAmountOut(allMeals.length - mealsInsideTheDiet);
    // setSeq(best);
    // setAmountIn(amountIn + amountOut);

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