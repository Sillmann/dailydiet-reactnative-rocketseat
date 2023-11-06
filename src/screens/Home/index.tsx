import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from '@components/Button';
import { CardStatistic } from "@cards/CardStatistic";
import { CardHeader } from "@cards/CardHeader";
import { CardMeat } from "@cards/CardMeat";

import { storageMealStatistic } from "@storage/meal/storageMealStatistic";
import { Container, ContainerMeat, Title } from "./styles";

type MeatProps = {
  amount: number;
  amountIn: number;
  amountOut: number; 
  percent: number;
  seq: number;
}

export function Home(){
  const navigation = useNavigation();
  const [statistic, setStatistic] = useState<MeatProps>()
  
  async function handleGetStatistics(){
    const estatisticas = await storageMealStatistic();
    setStatistic(prev => estatisticas);
  }

  function handleStatistics(){
    // navigation.navigate('statistics', { percentagem: statistic?.percentagemDentroDieta } )
    navigation.navigate('statistics')
  }

  useFocusEffect(useCallback(() => {
    handleGetStatistics();
  },[]));

  function handleNew(){
    navigation.navigate('new');
  }

  return (    
    <Container>
      
      <CardHeader/>

      <CardStatistic
        percentagem={statistic?.percent ? statistic?.percent : 0}  
        type={statistic?.percent >= 50 ? 'PRIMARY' : 'SECONDARY'} 
        onPress={handleStatistics}/>
      
      <ContainerMeat>

        <Title>
          Refeições
        </Title>

        <Button
          oTexto="  Nova Refeição  "
          onPress={handleNew}
          icon='add'
        />

      </ContainerMeat>

      <CardMeat />      

    </Container>
  );
}