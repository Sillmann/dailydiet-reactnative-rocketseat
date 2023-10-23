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
    refeicao: string;
    descricao: string;
    hora: string;
    dentroDieta: boolean;
    type: 'PRIMARY' | 'SECONDARY';
}

export function DetalhesRefeicao(){

  const navigation = useNavigation();
  const route = useRoute();
  const { id, title, refeicao, descricao, hora, dentroDieta, type } = route.params as RoutesParamsProps;  

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
    navigation.navigate('editar', {
      idRefeicao: id,
      dataRefeicao: title, 
      nomeRefeicao: refeicao,
      descricaoRefeicao: descricao,
      horaRefeicao: hora,
      dentroDietaRefeicao: dentroDieta,
      typeRefeicao: dentroDieta ? 'PRIMARY' : 'SECONDARY'
    });  
  }

  return (
    <Container>
      <Context type={type}>
        <CardHeaderNovaRefeicao label="Refeição" type={dentroDieta ? 'PRIMARY' : 'SECONDARY'} />
        <ViewPrincipal>
          <ViewTextos>
            <Titulo>{refeicao}</Titulo>
            <SubTitulo>{descricao}</SubTitulo>
            <TituloXS>Data e hora</TituloXS>
            <SubTitulo>{title} às {hora}</SubTitulo>
            <ViewDentroDieta>
              <CirculoStatusDieta type={type}/>
              <TextoStatusDieta>{dentroDieta ? 'dentro da dieta' : 'fora da dieta'}</TextoStatusDieta>
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