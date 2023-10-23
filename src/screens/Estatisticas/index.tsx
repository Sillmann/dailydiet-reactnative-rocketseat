import { useState, useCallback } from 'react';
import { CardEstatisticaIconeVoltar } from "@components/CardEstatisticaIconeVoltar";
import { CardEstatisticaSemIcone } from "@components/CardEstatisticaSemIcone";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { Container, Context, DivCardsQtdRefeicoes, Title } from "./styles";
import { refeicaoGetEstatisticas } from '@storage/refeicao/refeicaoGetEstatisticas';

type RoutesParamsProps = {
  percentagem: number;
  type: 'PRIMARY' | 'SECONDARY';
}

type RefeicaoProps = {
  qtdRefeicoes: number;
  qtdRefeicoesDentro: number;
  qtdRefeicoesFora: number; 
  percentagemDentroDieta: number;
  melhorSequencia: number;
}

export function Estatisticas(){

  const [estatisticas, setEstatisticas] = useState<RefeicaoProps>();

  async function handleGetEstatisticas(){
    const estatistica = await refeicaoGetEstatisticas();
    setEstatisticas(estatistica);
  }
  
  const route = useRoute();

  const { percentagem, type } = route.params as RoutesParamsProps;

  useFocusEffect(useCallback(() => {
    handleGetEstatisticas();
  },[]));

  return (
    <Container type={type}>
      <CardEstatisticaIconeVoltar percentagem={percentagem ? percentagem?.toFixed(2) : 0} type={percentagem >= 50 ? 'PRIMARY' : 'SECONDARY' } />
      <Context>
        <Title>Estatísticas gerais</Title>
        <CardEstatisticaSemIcone valor={estatisticas?.melhorSequencia} textoEmbaixo="melhor sequência de pratos dentro da dieta" />
        <CardEstatisticaSemIcone valor={estatisticas?.qtdRefeicoes} textoEmbaixo="refeições registradas" />
        <DivCardsQtdRefeicoes>
          <CardEstatisticaSemIcone valor={estatisticas?.qtdRefeicoesDentro} textoEmbaixo="refeições dentro da dieta"  type="PRIMARY"/>
          <CardEstatisticaSemIcone valor={estatisticas?.qtdRefeicoesFora} textoEmbaixo="refeições fora da dieta"  type="SECONDARY"/>
        </DivCardsQtdRefeicoes>
      </Context>
    </Container>
  );

}