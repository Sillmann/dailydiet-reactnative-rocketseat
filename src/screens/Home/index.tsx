import { Text, View, SectionList } from 'react-native';
import { useState } from 'react';
import { Alert } from 'react-native';

import { Container, ContainerRefeicoes, Title, Title2, ContainerListarRefeicoes, DataRefeicao } from './styles';
import { Header } from '@components/Header';
import { Info } from '@components/Info';
import { Button } from '@components/Button';
import { CardListRefeicoes } from '@components/CardListRefeicoes';
import { CardListRefeicoesData } from "@components/CardListRefeicaoData";


import { useNavigation } from '@react-navigation/native';

const dadosRefeicoes = [
    {
      title: "12.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "11.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "10.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Pamonha a moda com Linguiça" , type: 'SECONDARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    },
    {
      title: "09.08.22",
      data: [
        { hora: "20:00", refeicao: "X-Tudo" , type: 'SECONDARY' },
        { hora: "16:00", refeicao: "Whey protein com leite" , type: 'PRIMARY' },
        { hora: "12:30", refeicao: "Salada Ceasar com frango..." , type: 'PRIMARY' },
        { hora: "09:30", refeicao: "Vitamina de Banana com ..." , type: 'PRIMARY' }
      ]
    }
  ];

 
export function Home(props) {

  const navigation = useNavigation();

  function handleNew(){
    props.navigation.navigate('new');
  }


  return (
    <Container>

      <Header />
      <Info 
        percentual="98,99%"
        infotexto="das refeições dentro da dieta"
      />

      <ContainerRefeicoes>


      <Title>
        Refeições
      </Title>

      <Button
        oTexto="+ Nova Refeição"
        onPress={handleNew}
      />


      </ContainerRefeicoes>

      <CardListRefeicoesData /> 

      {/* <ContainerListarRefeicoes>
        <SectionList 
          sections={dadosRefeicoes}
          keyExtractor={(item, index) => item.hora + item.refeicao + index}
          renderItem={({ item }) => 
          // <Title>{item.refeicao}</Title>
          <CardListRefeicoes nomeRefeicao={item.refeicao}/>  
          }
          renderSectionHeader={({section: {title} }) => (
            <Title2>
              {title.replace('/','.').replace('/','.')}
            </Title2>
          )}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          stickySectionHeadersEnabled={false}
        />
      </ContainerListarRefeicoes> */}

      
      
 

    </Container>
  );
}