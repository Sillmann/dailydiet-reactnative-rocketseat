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

type RoutesParamsProps = {
  percentagem: number;
}

type RefeicaoProps = {
  qtdRefeicoes: number;
  qtdRefeicoesDentro: number;
  qtdRefeicoesFora: number; 
  percentagemDentroDieta: number;
  melhorSequencia: number;
}

export function Statistics(){

  const [estatisticas, setEstatisticas] = useState<RefeicaoProps>();

  async function handleGetEstatisticas(){
    const estatistica = await refeicaoGetEstatisticas();
    setEstatisticas(estatistica);
  }
  
  const route = useRoute();

  const { percentagem } = route.params as RoutesParamsProps;

  useFocusEffect(useCallback(() => {
    handleGetEstatisticas();
  },[]));

  return (
    <Container>
      
      <HeaderMeal 
        infoText='Estatísticas'/>

      <HeaderPercent 
        infoPercent={percentagem ? percentagem?.toFixed(2) : 0}
      /> 

      <Context>

        <Title>Estatísticas gerais</Title>
        
        <ViewStatistics1 
          infoNum={estatisticas?.melhorSequencia}
          infoText="melhor sequência de pratos dentro da dieta"
        />

        <ViewStatistics1 
          infoNum={estatisticas?.qtdRefeicoes}
          infoText="refeições registradas"
        />

        <Column>
          <ViewStatistics2
            infoNum={estatisticas?.qtdRefeicoesDentro} 
            infoText="refeições dentro da dieta"
            color="GREEN"
          />

          <ViewStatistics2
            infoNum={estatisticas?.qtdRefeicoesFora} 
            infoText="refeições fora da dieta"
            color="RED"
          />
        </Column>

]      </Context>
    </Container>
  );

}