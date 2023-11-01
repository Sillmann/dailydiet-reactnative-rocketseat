import { useState } from "react";

import { StyleSheet, 
         Alert, 
        } from "react-native";

import { Container } from "@components/Loading/styles";
import { HeaderMeal } from '@components/HeaderMeal';
import { TextInputMask } from "react-native-masked-text";
import { mealCreate} from '@storage/refeicao/mealCreate';
import { useNavigation } from "@react-navigation/native";

import statusyesPng from '@assets/statusyes.png';
import statusnoPng from '@assets/statusno.png';

import { BtnAddRefeicao, 
         Context, 
         DivLinha, 
         Form, 
         Label, 
         TextBtnRefeicao,
         InputName,
         InputDescription,
         DivColuna,
         BtnDietaSim,
         BtnDietaNao,
         Status
        } from "./styles";

export function New(){

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [diet, setDiet] = useState('');
  const [btnYes, setBtnYes] = useState("DEFAULT");
  const [btnNo, setBtnNo] = useState("DEFAULT");
  
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  async function handleAddRefeicao(){
    try {
      if(name.trim().length < 1){
        Alert.alert('Nova Refeição', 'Nome obrigatório!');
        return; 
      }

      if(description.trim().length < 1){
        Alert.alert('Nova Refeição', 'Descrição obrigatória!');
        return; 
      }

      if(date.trim().length < 1){ 
        Alert.alert('Nova Refeição', 'Data obrigatória!');
        return;
      }

      if(hour.trim().length < 1){ 
        Alert.alert('Nova Refeição', 'Hora obrigatória!');
        return;
      }

      if(btnYes === 'DEFAULT' && btnNo === 'DEFAULT'){
        Alert.alert('Nova Refeição', 'Obrigatório definir Dentro ou Fora da Dieta!');
        return; 
      }

  
      await mealCreate({name, 
                        description, 
                        date, 
                        hour, 
                        diet });

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
        
        <HeaderMeal infoText='Nova Refeição'/>

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

        </Form>

      </Context>

      <BtnAddRefeicao onPress={handleAddRefeicao}>
        <TextBtnRefeicao>Cadastrar refeição</TextBtnRefeicao>
      </BtnAddRefeicao>
      
    </Container>
  );  
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width:150,
    margin: 0,
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 16
  },
});