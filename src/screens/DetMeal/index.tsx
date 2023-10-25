import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Alert } from "react-native";
import { format } from 'date-fns';
import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { TextInputMask } from "react-native-masked-text";
import { BtnEditarExcluir, CirculoStatusDieta, Container, Context, IconPencilSimpleLine, IconTrash, SubTitulo, TextBtn, TextoStatusDieta, Titulo, TituloXS, ViewBtnEditarExcluir, ViewBtnInterno, ViewDentroDieta, ViewPrincipal, ViewTextos } from "./styles";
import { refeicaoRemoveById } from "@storage/refeicao/refeicaoRemoveById";

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
        <CardHeaderNovaRefeicao label="Refeição" type={diet ? 'S' : 'N'} />
        <ViewPrincipal>
          <ViewTextos>
            <Titulo>{name}</Titulo>
            <SubTitulo>{description}</SubTitulo>
            <TituloXS>Data e hora</TituloXS>
            <SubTitulo>{title} às {hour}</SubTitulo>
            <ViewDentroDieta>
              <CirculoStatusDieta type={diet}/>
              <TextoStatusDieta>{diet ? 'dentro da dieta' : 'fora da dieta'}</TextoStatusDieta>
            </ViewDentroDieta>
          </ViewTextos>
        </ViewPrincipal>
        <ViewBtnEditarExcluir>
          <BtnEditarExcluir type="PRIMARY" onPress={handleEditarRefeicao}>
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
          </BtnEditarExcluir>
        </ViewBtnEditarExcluir>
      </Context>
      
    </Container>
  );  
}