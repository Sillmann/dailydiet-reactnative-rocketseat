import { useCallback, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Button } from '@components/Button';
import { CardEstatisticaIcone } from "@components/CardEstatisticaIcone";
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";
import { HeaderHome } from "@views/HeaderHome";

import { refeicaoGetEstatisticas } from "@storage/refeicao/refeicaoGetEstatisticas";
import { Container, ContainerMeat, Title } from "./styles";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";

type MeatProps = {
  qtdRefeicoes: number;
  qtdRefeicoesDentro: number;
  qtdRefeicoesFora: number; 
  percentagemDentroDieta: number;
}

export function Home(){
  const navigation = useNavigation();
  const [estatistica, setEstatistica] = useState<MeatProps>()
  
  async function handleGetEstatisticas(){
    const estatisticas = await refeicaoGetEstatisticas();
    setEstatistica(prev => estatisticas);
  }

  function handleStatistics(){
    navigation.navigate('estatisticas', { percentagem: estatistica?.percentagemDentroDieta , type: estatistica?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY' } )
  }

  useFocusEffect(useCallback(() => {
    handleGetEstatisticas();
  },[]));

  function handleNew(){
    navigation.navigate('new');
  }

  return (    
    <Container>
      <HeaderHome />
      <CardEstatisticaIcone 
        percentagem={estatistica?.percentagemDentroDieta ? estatistica?.percentagemDentroDieta : 0}  
        type={estatistica?.percentagemDentroDieta >= 50 ? 'PRIMARY' : 'SECONDARY'} 
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

      <CardListRefeicoesData />      
    </Container>
  );
}