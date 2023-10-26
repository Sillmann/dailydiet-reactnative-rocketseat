import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Alert } from "react-native";
import { format } from 'date-fns';
// import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { HeaderMeal } from '@components/HeaderMeal';
import { Button } from '@components/Button';

import { TextInputMask } from "react-native-masked-text";
import { refeicaoRemoveById } from "@storage/refeicao/refeicaoRemoveById";

import editPng from '@assets/edit.png';

import { Container, 
         Context, 
         Form, 
         Title,
         SubTitle,
         Label, 
         Diet,
         ImgDiet, 
         TextDiet,
         ListButtons, 
         BtnEditarExcluir, 
         IconPencilSimpleLine, 
         IconTrash, 
         TextBtn, 
         ViewBtnInterno, 
        } from "./styles";

type RoutesParamsProps = {
    id: number;
    title: string;
    name: string;
    description: string;
    hour: string;
    diet: boolean;
    // type: 'PRIMARY' | 'SECONDARY';
}

export function DetMeal(){

  const navigation = useNavigation();
  const route = useRoute();
  const { id, title, name, description, hour, diet } = route.params as RoutesParamsProps;  

  function handleRefeicaoRemove(){
    Alert.alert('Remover', 'Deseja remover a refeicao?',
     [
      { text: 'Não', style: 'cancel'},
      { text: 'Sim', onPress: () => handleRefeicaoRemoveConfirmed() }
     ]);
    
  }

  async function handleRefeicaoRemoveConfirmed(){

    await refeicaoRemoveById(id, title);
    navigation.navigate('home');
  }

  function handleEditarRefeicao(){
    navigation.navigate('editmeal', {
      idRefeicao: id,
      dataRefeicao: title, 
      nomeRefeicao: name,
      descricaoRefeicao: description,
      horaRefeicao: hour,
      dentroDietaRefeicao: diet
      // ,
      // typeRefeicao: dentroDieta ? 'PRIMARY' : 'SECONDARY'
    });  
  }

  return (
    <Container>
      <Context type={diet}>
        {/* <CardHeaderNovaRefeicao label="Refeição" type={diet ? 'S' : 'N'} /> */}
        
        <HeaderMeal infoText='Refeição'/>

        <Form>
            <Title>{name}</Title>
            <SubTitle>{description}</SubTitle>
            <Label>Data e hora</Label>
            <SubTitle>{title} às {hour}</SubTitle>
            
            <Diet>
              <ImgDiet type={diet}/>
              <TextDiet>{diet === 'S' ? 'dentro da dieta' : 'fora da dieta'}</TextDiet>
            </Diet>
        </Form>

        <ListButtons>

          <Button
            oTexto="Editar Refeição"
            onPress={handleEditarRefeicao}
            type={editPng}
          />

          <Button
            oTexto="Excluir Refeição"
            onPress={handleRefeicaoRemove}
            type={editPng}
          />

          {/* <BtnEditarExcluir type="PRIMARY" onPress={handleEditarRefeicao}>
            <ViewBtnInterno>
              <IconPencilSimpleLine type="PRIMARY" />
              <TextBtn type="PRIMARY">Editar refeição</TextBtn>
            </ViewBtnInterno>
          </BtnEditarExcluir>
          <BtnEditarExcluir type="DEFAULT" onPress={handleRefeicaoRemove}>
          <ViewBtnInterno>
              <IconTrash type="SECONDARY" />
              <TextBtn type="SECONDARY">Excluir refeição</TextBtn>
            </ViewBtnInterno>
          </BtnEditarExcluir> */}
        </ListButtons>

      </Context>
      
    </Container>
  );  
}