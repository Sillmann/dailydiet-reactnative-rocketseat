import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Alert } from "react-native";
import { HeaderMeal } from '@components/HeaderMeal';
import { Button } from '@components/Button';

// import { TextInputMask } from "react-native-masked-text";
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

type RouteParamsProps = {
    pName: string;
    pDescription: string;
    pDate: string;
    pHour: string;
    pDiet: string;
}

export function DetMeal(){

  const navigation = useNavigation();
  const route = useRoute();
  const { pName, pDescription, pDate, pHour, pDiet } = route.params as RouteParamsProps;  

  function handleRefeicaoRemove(){
    Alert.alert('Remover', 'Deseja remover a refeicao?',
     [
      { text: 'Não', style: 'cancel'},
      { text: 'Sim', onPress: () => handleRefeicaoRemoveConfirmed() }
     ]);
    
  }

  async function handleRefeicaoRemoveConfirmed(){

    await refeicaoRemoveById(pDate, pHour);
    navigation.navigate('home');
  }

  function handleEditarRefeicao(){
    navigation.navigate('editmeal', {
      pName: pName,
      pDescription: pDescription,
      pDate: pDate, 
      pHour: pHour,
      pDiet: pDiet
    });  
  }

  return (
    <Container>
      <Context type={pDiet}>
        
        <HeaderMeal infoText='Refeição'/>

        <Form>
            <Title>{pName}</Title>
            <SubTitle>{pDescription}</SubTitle>
            <Label>Data e hora</Label>
            <SubTitle>{pDate} às {pHour}</SubTitle>
            
            <Diet>
              <ImgDiet type={pDiet}/>
              <TextDiet>{pDiet === 'S' ? 'dentro da dieta' : 'fora da dieta'}</TextDiet>
            </Diet>
        </Form>

        <ListButtons>

          <Button
            oTexto='  Editar Refeição  '
            onPress={handleEditarRefeicao}
            type='EDIT'
            icon='border-color'
          />

          <Button
            oTexto='  Excluir Refeição  '
            onPress={handleRefeicaoRemove}
            type='DELETE'
            icon='delete-forever'
          />

        </ListButtons>

      </Context>
      
    </Container>
  );  
}