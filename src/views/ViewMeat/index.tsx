import { ListMeal } from "@components/ListMeal";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";
import { useFocusEffect } from "@react-navigation/native";
import { refeicoesGetAll } from "@storage/refeicao/refeicaoGetAll";
import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, DataRefeicao } from "./styles";


type refeicaoProps = {  
  title: string,
      data: [
        { 
          id: number,
          hora: string, 
          refeicao: string, 
          descricao: string;          
          dentroDieta: boolean,
          type: "PRIMARY" | "SECONDARY"
        }
      ]
}

export function ViewMeat(){
  const [dadosRefeicoes, setDadosRefeicos]  = useState<refeicaoProps[]>([]);

  try {
    async function fetchRefeicoes(){
      const dados = await refeicoesGetAll();

      dados.map(dado => {
        dado.data.sort((a,b) => a.hora < b.hora)
      })
      setDadosRefeicos(dados);
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
        sections={dadosRefeicoes}
        keyExtractor={(item, index) => item.hora + item.refeicao + index}
        renderItem={({ item }) => 
          <ListMeal hora={item.hora} id={item.id} nomeRefeicao={item.refeicao} type={item.type} />                 
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