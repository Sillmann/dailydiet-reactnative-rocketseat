import { useCallback, useState } from "react";
import { SectionList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

import { ListMeal } from "@components/ListMeal";
import { mealGetAll } from "@storage/refeicao/mealGetAll";
import { getSection } from "@storage/refeicao/getSection";

import { Container, DataRefeicao } from "./styles";


type mealProps = {  
  title: string,
  data: [
    { 
      id: number,
      hour: string, 
      name: string, 
      description: string;          
      diet: boolean
    }
  ]
}

export function ViewMeat(){
  const [dataMeals, setDataMeals]  = useState<mealProps[]>([]);

  try {
    async function fetchRefeicoes(){
      // const dataFile = await mealGetAll();

      // dataFile.map(dado => {
      //   dado.data.sort((a,b) => a.hour < b.hour)
      // })
      // setDataMeals(dataFile);
      // console.log(dataFile);
      // [{"data": [[Object]], "title": "28/10/2023"}, {"data": [[Object]], "title": "28/10/2023"}]

      const allMealsInSection = await getSection();

			setDataMeals(allMealsInSection);
    }

    useFocusEffect(useCallback(() => {
      fetchRefeicoes();
    },[]));
    
  } catch (error) {
    console.log(error);
  }

  return (
    <Container>
      <SectionList 
        sections={dataMeals}
        keyExtractor={(item, index) => item.hour + item.name + index}
        renderItem={({ item }) => 
          <ListMeal date={item.date} hour={item.hour} name={item.name} type={item.diet} />                 
        }
        renderSectionHeader={({section: {title} }) => (
          <DataRefeicao>{title.replace('/','.').replace('/','.')}</DataRefeicao>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickySectionHeadersEnabled={false}
      />      
    </Container>
  );
}