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
      name: string, 
      description: string, 
      date: string, 
      hour: string, 
      diet: string
    }
  ]
}

export function ViewMeat(){
  const [dataMeals, setDataMeals]  = useState<mealProps[]>([]);

  try {
    async function fetchRefeicoes(){
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
          <ListMeal id={item.id} name={item.name} description={item.description} date={item.date} hour={item.hour} type={item.diet} />                 
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