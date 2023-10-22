import { CardListRefeicoes } from "@components/CardListRefeicoes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { refeicaoGetAll } from "@storage/refeicoes/refeicaoGetAll";
// import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";
import { useCallback, useEffect, useState } from "react";
import { SectionList } from "react-native";
import { Container, DataRefeicao } from "./styles";


type refeicaoProps = {  
  title: string,
  data: [
    { 
      id: number,
      nome: string, 
      descricao: string;          
      hora: string, 
      dieta: boolean
    }
  ]
}  

const dadosRefeicoes = [
  {
    title: "12.08.22",
    data: [
      { hora: "20:00", nome: "X-Tudo" , type: 'SECONDARY' },
      { hora: "16:00", nome: "Whey protein com leite" , type: 'PRIMARY' },
      { hora: "12:30", nome: "Salada Ceasar com frango..." , type: 'PRIMARY' },
      { hora: "09:30", nome: "Vitamina de Banana com ..." , type: 'PRIMARY' }
    ]
  },
  {
    title: "11.08.22",
    data: [
      { hora: "20:00", nome: "X-Tudo" , type: 'SECONDARY' },
      { hora: "16:00", nome: "Whey protein com leite" , type: 'PRIMARY' },
      { hora: "12:30", nome: "Salada Ceasar com frango..." , type: 'PRIMARY' },
      { hora: "09:30", nome: "Vitamina de Banana com ..." , type: 'PRIMARY' }
    ]
  },
  {
    title: "10.08.22",
    data: [
      { hora: "20:00", nome: "X-Tudo" , type: 'SECONDARY' },
      { hora: "16:00", nome: "Pamonha a moda com Linguiça" , type: 'SECONDARY' },
      { hora: "12:30", nome: "Salada Ceasar com frango..." , type: 'PRIMARY' },
      { hora: "09:30", nome: "Vitamina de Banana com ..." , type: 'PRIMARY' }
    ]
  },
  {
    title: "09.08.22",
    data: [
      { hora: "20:00", nome: "X-Tudo" , type: 'SECONDARY' },
      { hora: "16:00", nome: "Whey protein com leite" , type: 'PRIMARY' },
      { hora: "12:30", nome: "Salada Ceasar com frango..." , type: 'PRIMARY' },
      { hora: "09:30", nome: "Vitamina de Banana com ..." , type: 'PRIMARY' }
    ]
  }
];

export function CardListRefeicoesData(){

  // const [dadosRefeicoes, setDadosRefeicoes]  = useState<refeicaoProps[]>([]);


  // try {
  //   async function fetchRefeicoes(){
  //     const dados = await refeicoesGetAll();

  //     console.log(dados);
  //     console.log('teste');
      
  //     dados.map(dado => {
  //       dado.data.sort((a,b) => a.hora < b.hora)
  //     })
  //     setDadosRefeicoes(dados);
  //   }    
  //   useFocusEffect(useCallback(() => {
  //     fetchRefeicoes();
  //   },[]));
    
  // } catch (error) {
  //   console.log(error);
  // }

  async function fetchRefeicoes(){
    try{
      
      const data = await refeicaoGetAll();
      setDadosRefeicoes(data);
      console.log(data);

    }catch(error){
      console.log(error);
      // Alert.alert('xxxx','Não foi possivel carregar as refeicoes');
    }
  }  

  useFocusEffect(useCallback(() => {
    // fetchRefeicoes();
    console.log(dadosRefeicoes);
  },[]));



  return (
    <Container>
      <SectionList 
        sections={dadosRefeicoes}
        // keyExtractor={(item, index) => item.hora + item.nome + index}
        renderItem={({ item }) => 
          <CardListRefeicoes nomeRefeicao={item.nome} />                 
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