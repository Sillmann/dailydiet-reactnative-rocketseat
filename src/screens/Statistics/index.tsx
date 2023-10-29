import { useState, useCallback } from 'react';
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { refeicaoGetEstatisticas } from '@storage/refeicao/refeicaoGetEstatisticas';
import { HeaderMeal } from '@components/HeaderMeal';
import { HeaderPercent } from '@components/HeaderPercent';
import { ViewStatistics1 } from './ViewStatistics1';
import { ViewStatistics2 } from './ViewStatistics2';

import { Container, 
         Context, 
         Column, 
         Title } from "./styles";

// type RoutesParamsProps = {
//   percentagem: number;
// }

type RefeicaoProps = {
  amount: number;
  amountIn: number;
  amountOut: number; 
  percent: number;
  seq: number;
}

export function Statistics(){

  const [estatisticas, setEstatisticas] = useState<RefeicaoProps>();

  async function handleGetEstatisticas(){
    const estatistica = await refeicaoGetEstatisticas();
    setEstatisticas(estatistica);
  }
  
  const route = useRoute();

  // const { percentagem } = route.params as RoutesParamsProps;

  useFocusEffect(useCallback(() => {
    handleGetEstatisticas();
  },[]));

  return (
    <Container>
      
      <HeaderMeal 
        infoText='Estatísticas'/>

      <HeaderPercent 
        // infoPercent={percentagem ? percentagem?.toFixed(2) : 0}
        infoPercent={estatisticas?.percent}
      /> 

      <Context>

        <Title>Estatísticas gerais</Title>
        
        <ViewStatistics1 
          infoNum={estatisticas?.seq}
          infoText="melhor sequência de pratos dentro da dieta"
        />

        <ViewStatistics1 
          infoNum={estatisticas?.amount}
          infoText="refeições registradas"
        />

        <Column>
          <ViewStatistics2
            infoNum={estatisticas?.amountIn} 
            infoText="refeições dentro da dieta"
            color="GREEN"
          />

          <ViewStatistics2
            infoNum={estatisticas?.amountOut} 
            infoText="refeições fora da dieta"
            color="RED"
          />
        </Column>

      </Context>
    </Container>
  );

}