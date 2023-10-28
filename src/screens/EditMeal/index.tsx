import { useState } from "react";
import { StyleSheet, 
         Alert } from "react-native";
import { refeicaoUpdate } from "@storage/refeicao/refeicaoUpdate";

import { TextInputMask } from "react-native-masked-text";

import { Container } from "@components/Loading/styles";
import { HeaderMeal } from '@components/HeaderMeal';

import { useNavigation, useRoute } from "@react-navigation/native";

import statusyesPng from '@assets/statusyes.png';
import statusnoPng from '@assets/statusno.png';

import { BtnAddRefeicao, 
         Context, 
         DivLinha, 
         DivColuna,
         Form, 
         InputName, 
         InputDescription, 
         Label, 
         TextBtnRefeicao,
         BtnDietaSim,
         BtnDietaNao,
         Status
        } from "./styles";


type RouteParamsProps = {
  pId: number;
  pTitle: string;
  pName: string;
  pDescription: string;
  pHour: string;
  pDiet: string;
}

export function EditMeal(){

  const navigation = useNavigation();
  const route = useRoute();
  // const { idRefeicao, dataRefeicao, nomeRefeicao, descricaoRefeicao, horaRefeicao, dentroDietaRefeicao, typeRefeicao } = route.params as RouteParamsProps;  
  const { pId, pTitle, pName, pDescription, pHour, pDiet } = route.params as RouteParamsProps;  

  const [name, setName] = useState(pName);
  const [description, setDescription] = useState(pDescription);
  const [date, setDate] = useState(pTitle);
  const [hour, setHour] = useState(pHour);
  const [diet, setDiet] = useState(pDiet);
  const [btnYes, setBtnYes] = useState(pDiet === 'S' ?"PRIMARY" : "DEFAULT");;
  const [btnNo, setBtnNo] = useState(pDiet === 'S' ? "DEFAULT" : "SECONDARY");

  async function handleUpdateMeal(){
    try {
      
      // const dados = {
      //     id: idRefeicao,
      //     hora, 
      //     refeicao, 
      //     descricao,
      //     dentroDieta,
      //     type: dentroDieta  ? "PRIMARY" : "SECONDARY"      
      // }

      if(name.trim().length < 1){
        Alert.alert('Atualiza Refeição', 'Nome obrigatório!');
        return; 
      }

      if(description.trim().length < 1){
        Alert.alert('Atualiza Refeição', 'Descrição obrigatória!');
        return; 
      }

      if(date.trim().length < 1){ 
        Alert.alert('Atualiza Refeição', 'Data obrigatória!');
        return;
      }

      if(hour.trim().length < 1){ 
        Alert.alert('Atualiza Refeição', 'Hora obrigatória!');
        return;
      }

      // if(btnSim === 'DEFAULT' && btnNao === 'DEFAULT'){
      //   Alert.alert('Nova Refeição', 'Está dentro da dieta precisa ser definido!');
      //   return; 
      // }
        
      // await mealCreate({title: date, hour, id: newId, name, description, diet });

      await refeicaoUpdate({title: date, titleAntiga: date, hour, id: id,    name, description, diet });
      
      // navigation.navigate('salvo', {type:  dentroDieta  ? "PRIMARY" : "SECONDARY"});
      if (diet==='S'){
        navigation.navigate('good');
      } else {
        navigation.navigate('bad');
      }
      
    } catch (error) {
      console.log(error);      
    }
  }  

  function handleSetInDiet(){
    setBtnYes('PRIMARY');
    setBtnNo('DEFAULT');
    setDiet('S');
  }

  function handleSetOutDiet(){
    setBtnYes('DEFAULT');
    setBtnNo('SECONDARY');
    setDiet('N');    
  }

  return (
    <Container>
      <Context>
        
        <HeaderMeal infoText='Editar Refeição'/>

        <Form>

          <DivLinha>
            <Label>Nome</Label>
            <InputName 
              value={name} 
              onChangeText={setName} 
            />
          </DivLinha>

          <DivLinha>
            <Label>Descrição</Label>
            <InputDescription
              value={description}
              onChangeText={setDescription} 
              multiline={true}
              numberOfLines={4}
            />
            
          </DivLinha>

          <DivColuna>
          
            <DivLinha>
              <Label>Data</Label>

              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY'
                }}
                value={date}
                onChangeText={setDate}
                style={styles.input}
              />

            </DivLinha> 

            <DivLinha>
              <Label>Hora</Label>
              
              <TextInputMask
                type={'datetime'}
                options={{
                  format: 'HH:mm'
                }}
                value={hour}
                onChangeText={setHour}
                style={styles.input}
              />
            </DivLinha> 

          </DivColuna> 

          <DivLinha>
            <Label>Está dentro da dieta?</Label>
          </DivLinha>

          <DivLinha>

            <DivColuna>

              <BtnDietaSim
                type={btnYes}
                onPress={handleSetInDiet}
              >
              
                <Status source={statusyesPng} />
                <Label>  Sim  </Label>

              </BtnDietaSim>

              <BtnDietaNao
                type={btnNo}
                onPress={handleSetOutDiet}
              >
              
                <Status source={statusnoPng} />
                <Label>  Não  </Label>
              </BtnDietaNao>

              
            </DivColuna>

          </DivLinha>

        </Form>
      </Context>

      <BtnAddRefeicao onPress={handleUpdateMeal}>
        <TextBtnRefeicao>Salvar Alterações</TextBtnRefeicao>
      </BtnAddRefeicao>

    </Container>
  );  
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    width:150,
    margin: 0,
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 16
  },
});