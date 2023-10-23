import { useState } from "react";
import { StyleSheet, Alert, KeyboardAvoidingView, Platform } from "react-native";
import { format } from 'date-fns';
import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { Container } from "@components/Loading/styles";
import { TextInputMask } from "react-native-masked-text";
import { BtnAddRefeicao, BtnDieta, CirculoStatus, Context, DivLinha, DivLinha2Colunas, DivLinha2ColunasSemMargem, DivLinhaMetade, Form, Input, Label, TextBtnRefeicao } from "./styles";
import THEME from '../../theme';
import {refeicaoCreate} from '@storage/refeicao/refeicaoCreate';
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION } from "@storage/storageConfig";
import { getNewIdRefeicao } from "@storage/refeicao/getNewIdRefeicao";
import { refeicaoUpdate } from "@storage/refeicao/refeicaoUpdate";

type RoutesParamsProps = {
  idRefeicao: number;
  dataRefeicao: string;
  nomeRefeicao: string;
  descricaoRefeicao: string;
  horaRefeicao: string;
  dentroDietaRefeicao: boolean;
  typeRefeicao: 'PRIMARY' | 'SECONDARY'
}

export function EditarRefeicao(){

  const navigation = useNavigation();
  const route = useRoute();
  const { idRefeicao, dataRefeicao, nomeRefeicao, descricaoRefeicao, horaRefeicao, dentroDietaRefeicao, typeRefeicao } = route.params as RoutesParamsProps;  

  const [date, setDate] = useState(dataRefeicao);  
  const [hora, setHora] = useState(horaRefeicao);
  const [btnSim, setBtnSim] = useState(dentroDietaRefeicao ? "PRIMARY" : "DEFAULT");
  const [btnNao, setBtnNao] = useState(dentroDietaRefeicao ? "DEFAULT" : "SECONDARY");
  const [refeicao, setRefeicao] = useState(nomeRefeicao);
  const [descricao, setDescricao] = useState(descricaoRefeicao);
  const [dentroDieta, setDentroDieta] = useState(dentroDietaRefeicao);  


  async function handleAddRefeicao(){
    try {
      
      const dados = {
          id: idRefeicao,
          hora, 
          refeicao, 
          descricao,
          dentroDieta,
          type: dentroDieta  ? "PRIMARY" : "SECONDARY"      
      }

      if(refeicao.trim().length < 1){
        Alert.alert('Nova Refeição', 'Nome precisa ser preenchida!');
        return; 
      }

      if(descricao.trim().length < 1){
        Alert.alert('Nova Refeição', 'Descrição precisa ser preenchida!');
        return; 
      }

      if(date.trim().length < 1){ 
        Alert.alert('Nova Refeição', 'Data precisa ser preenchida!');
        return;
      }

      if(hora.trim().length < 1){ 
        Alert.alert('Nova Refeição', 'Hora precisa ser preenchida!');
        return;
      }

      if(btnSim === 'DEFAULT' && btnNao === 'DEFAULT'){
        Alert.alert('Nova Refeição', 'Está dentro da dieta precisa ser definido!');
        return; 
      }
        
      await refeicaoUpdate({title: date, titleAntiga: dataRefeicao, hora, id: idRefeicao, refeicao, descricao, dentroDieta, type:  dentroDieta  ? "PRIMARY" : "SECONDARY" });

      navigation.navigate('salvo', {type:  dentroDieta  ? "PRIMARY" : "SECONDARY"});
      
      
    } catch (error) {
      console.log(error);      
    }
  }  

  function handleSetDentroDieta(){
    if(btnSim === "DEFAULT"){
      setBtnSim("PRIMARY");
      setBtnNao("DEFAULT");
      setDentroDieta(true);
    }else{
      setBtnSim("DEFAULT")
      setDentroDieta(false);
    }
  }

  function handleSetForaDieta(){
    if(btnNao === "DEFAULT"){
      setBtnNao("SECONDARY");
      setBtnSim("DEFAULT");
      setDentroDieta(false);
    }else{
      setBtnNao("DEFAULT")
      setDentroDieta(false);
    }
  }

  // const behavior = Platform.OS === "ios" ? "padding" : "padding";
  return (
    <Container>
      <Context>
        <CardHeaderNovaRefeicao label="Editar Refeição" type="GRAY" />
        <Form>
          <KeyboardAvoidingView style={{flex: 1}} behavior="position" keyboardVerticalOffset={50}>
          <DivLinha>
            <Label>Nome</Label>
            <Input value={refeicao} onChangeText={setRefeicao} />
          </DivLinha>

          <DivLinha>
            <Label>Descrição</Label>
            <Input style={{
              height: 120
            }} multiline={true} numberOfLines={4} value={descricao} onChangeText={setDescricao} />
          </DivLinha>
          
          <DivLinha2Colunas>
            <DivLinhaMetade>
              <Label>Data</Label>
              <TextInputMask 
                style={styles.input}
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                placeholder={format(new Date(), 'dd/MM/yyyy')}
                keyboardType={"default"}
                value={date}
                onChangeText={setDate}             
            />
            </DivLinhaMetade>
            <DivLinhaMetade>
              <Label>Hora</Label>
              <TextInputMask 
                style={styles.input}
                type={'datetime'}
                options={{
                  format: 'HH:MM'
                }}
                placeholder={format(new Date(), 'HH:MM')}
                keyboardType={"default"}
                value={hora}
                onChangeText={setHora}             
            />
            </DivLinhaMetade>          
          </DivLinha2Colunas>

          <DivLinha>
            <Label>Está dentro da dieta?</Label> 
            <DivLinha2ColunasSemMargem>
              <DivLinhaMetade>
                <BtnDieta type={btnSim} onPress={handleSetDentroDieta}>
                <CirculoStatus type="PRIMARY" />
                  <Label>Sim</Label>
                </BtnDieta>              
              </DivLinhaMetade>
              <DivLinhaMetade>
                <BtnDieta type={btnNao} onPress={handleSetForaDieta}>
                <CirculoStatus type="SECONDARY" />
                  <Label>Não</Label>  
                </BtnDieta>              
              </DivLinhaMetade>
            </DivLinha2ColunasSemMargem>
          </DivLinha>

          </KeyboardAvoidingView>
        </Form>
      </Context>
      <BtnAddRefeicao onPress={handleAddRefeicao}>
        <TextBtnRefeicao>Salvar alterações</TextBtnRefeicao>
      </BtnAddRefeicao>
    </Container>
  );  
}

const styles = StyleSheet.create({
  input:{
    width: '100%',
    height: 48,
    borderRadius: 6,
    fontSize: THEME.FONT_SIZE.BODY_M,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.BASE.GRAY[100],
    padding: 14,
    borderColor: THEME.COLORS.BASE.GRAY[500],
    borderWidth: 1,
    marginTop: 20,

  }
})