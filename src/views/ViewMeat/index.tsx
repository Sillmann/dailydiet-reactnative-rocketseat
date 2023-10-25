import { ListMeal } from "@components/ListMeal";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";
import { useFocusEffect } from "@react-navigation/native";
import { mealGetAll } from "@storage/refeicao/mealGetAll";
import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
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
      const dataFile = await mealGetAll();

      dataFile.map(dado => {
        dado.data.sort((a,b) => a.hour < b.hour)
      })
      setDataMeals(dataFile);
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
          <ListMeal hour={item.hour} id={item.id} name={item.name} type={item.diet} />                 
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