import { useState, useCallback } from 'react';
import { useFocusEffect } from "@react-navigation/native";
import { storageMealStatistic } from '@storage/meal/storageMealStatistic';
import { HeaderMeal } from '@components/HeaderMeal';
import { HeaderPercent } from '@components/HeaderPercent';
import { CardStatistics1 } from '@cards/CardStatistics1';
import { CardStatistics2 } from '@cards/CardStatistics2';

import { Container, 
         Context, 
         Column, 
         Title } from "./styles";

type RefeicaoProps = {
  amount: number;
  amountIn: number;
  amountOut: number; 
  percent: number;
  seq: number;
}

export function Statistics(){

  const [info, setInfo] = useState<RefeicaoProps>();

  async function handleGetStatistics(){
    const mealStatistic = await storageMealStatistic();
    setInfo(mealStatistic);
  }
  
  useFocusEffect(useCallback(() => {
    handleGetStatistics();
  },[]));

  return (
    <Container>
      
      <HeaderMeal 
        infoText='Estatísticas'/>

      <HeaderPercent 
        infoPercent={info?.percent ? info.percent?.toFixed(2) : 0}
        // infoPercent={info?.percent ? info.percent?.toFixed(2) : 0}
        
        // infoPercent={info?.percent}
      /> 

      <Context>

        <Title>Estatísticas gerais</Title>
        
        <CardStatistics1 
          infoNum={info?.seq}
          infoText="melhor sequência de pratos dentro da dieta"
        />

        <CardStatistics1 
          infoNum={info?.amount}
          infoText="refeições registradas"
        />

        <Column>
          <CardStatistics2
            infoNum={info?.amountIn} 
            infoText="refeições dentro da dieta"
            color="GREEN"
          />

          <CardStatistics2
            infoNum={info?.amountOut} 
            infoText="refeições fora da dieta"
            color="RED"
          />
        </Column>

      </Context>
    </Container>
  );

}