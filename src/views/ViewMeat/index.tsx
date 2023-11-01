import { useCallback, useState } from "react";
import { FlatList } from 'react-native';
import { useFocusEffect } from "@react-navigation/native";

import { ListMeal } from "@components/ListMeal";
import { mealsRetrieve } from '@storage/refeicao/mealsRetrieve';

import { Container, DataRefeicao, Dates } from "./styles";

export type mealProps = {
  id: number,
  name: string, 
  description: string, 
  date: string, 
  hour: string, 
  diet: string
};

type Props = {
  meals: mealProps[];
};

export function ViewMeat(){
  const [dataMeals, setDataMeals] = useState<mealProps[]>([]);
  const [ meals, setMeals ] = useState<mealProps[]>([]);

  function handleNewMeal() {
    // navigation.navigate('newmeal') 
  }

  try {
    async function fetchRefeicoes(){
      const allMealsInSection = await mealsRetrieve();
      setMeals(allMealsInSection);
    }

    useFocusEffect(useCallback(() => {
      fetchRefeicoes();
    },[]));
    
  } catch (error) {
    console.log(error);
  }

  function groupAndSortMealsByDate({ meals }: Props) {
    // console.log('aqui');
    // console.log({ meals });
     const mealsByDate: { [date: string]: mealProps[] } = meals.reduce(
       (acc: { [date: string]: mealProps[] }, meal) => {
        //  console.log('meal.date');
        //  console.log(meal.date);
        //  console.log(meal);
         //  {"date": "29/10/203", "description": "Yuy", "diet": "S", "hour": "22:00", "id": 3, "name": "Yyy"}
    //     // const date = new Date(meal.date).toDateString();
            const date = meal.date;

        if (!acc[date]) {
          acc[date] = [];
        }
            acc[date].push(meal);

            // console.log('acc');
            // console.log(acc);
            // {"29/10/203": [{"date": "29/10/203", "description": "Yuy", "diet": "S", "hour": "22:00", "id": 3, "name": "Yyy"}], "30/10/2023": [{"date": "30/10/2023", "description": "Pão e manteiga ", "diet": "S", "hour": "07:00", "id": 1, "name": "Café "}, {"date": "30/10/2023", "description": "Xxxx", "diet": "S", "hour": "19:00", "id": 2, "name": "Xxxxx"}]}
          return acc;
       },
       {}
    );
  
    
    
    const sortedMealsByDatex = Object.entries(mealsByDate)
      // .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
      .map(([date, meals]) => ({
        dateaaa: date,
        meals,
      }));

      console.log('meals');
      console.log(meals);

     return sortedMealsByDatex;
  }

  const sortedMealsByDate = groupAndSortMealsByDate({meals}); 

  return (
    <Container>

      <FlatList 
        data={sortedMealsByDate}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (

          <>
            <Dates>{item.dateaaa}</Dates>

            <FlatList
              data={item.meals}
              keyExtractor={(meal) => meal.id.toString()}
              renderItem={({ item }) => (

                <ListMeal 
                  id={item.id} 
                  name={item.name} 
                  description={item.description} 
                  date={item.date} 
                  hour={item.hour} 
                  type={item.diet} 
                />                 

              )}
            />

          </>          
          
        )}
      />
    </Container>
  );
}