import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from '@components/Button';
import { ViewMeat } from "@views/ViewMeat";
import { ViewStatistic } from "@views/ViewStatistic";
import { ViewHeader } from "@views/ViewHeader";

import { refeicaoGetEstatisticas } from "@storage/refeicao/refeicaoGetEstatisticas";
import { Container, ContainerMeat, Title } from "./styles";

type MeatProps = {
  qtdRefeicoes: number;
  qtdRefeicoesDentro: number;
  qtdRefeicoesFora: number; 
  percentagemDentroDieta: number;
}

export function Home(){
  const navigation = useNavigation();
  const [statistic, setStatistic] = useState<MeatProps>()
  
  async function handleGetStatistics(){
    const estatisticas = await refeicaoGetEstatisticas();
    setStatistic(prev => estatisticas);
  }

  function handleStatistics(){
    navigation.navigate('statistics', { percentagem: statistic?.percentagemDentroDieta , type: statistic?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY' } )
  }

  useFocusEffect(useCallback(() => {
    handleGetStatistics();
  },[]));

  function handleNew(){
    navigation.navigate('new');
  }

  return (    
    <Container>
      
      <ViewHeader />

      <ViewStatistic
        percentagem={statistic?.percentagemDentroDieta ? statistic?.percentagemDentroDieta : 0}  
        type={statistic?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY'} 
        onPress={handleStatistics}/>
      
      <ContainerMeat>

        <Title>
          Refeições
        </Title>

        <Button
          oTexto="+ Nova Refeição"
          onPress={handleNew}
        />

      </ContainerMeat>

      <ViewMeat />      

    </Container>
  );
}