import { useState } from "react";

import { StyleSheet, 
         Alert, 
         KeyboardAvoidingView, 
         Platform,
         ScrollView } from "react-native";

import { format } from 'date-fns';
import { CardHeaderNovaRefeicao } from "@components/CardHeaderNovaRefeicao";
import { Container } from "@components/Loading/styles";
import { HeaderMeat } from '@components/HeaderMeat';
import { TextInputMask } from "react-native-masked-text";
import { mealCreate} from '@storage/refeicao/mealCreate';
import { useNavigation } from "@react-navigation/native";
import { getNewIdRefeicao } from "@storage/refeicao/getNewIdRefeicao";

import statusyesPng from '@assets/statusyes.png';
import statusnoPng from '@assets/statusno.png';

import { BtnAddRefeicao, 
         BtnDieta, 
         CirculoStatus, 
         Context, 
         DivLinha, 
         DivLinha2Colunas, 
         DivLinha2ColunasSemMargem, 
         DivLinhaMetade, 
         Form, 
         Input, 
         Label, 
         TextBtnRefeicao,
         DivDados,
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
  
  // const [date, setDate] = useState('');  
  // const [hora, setHora] = useState('');
  // const [btnSim, setBtnSim] = useState("DEFAULT");
  // const [btnNao, setBtnNao] = useState("DEFAULT");
  // const [refeicao, setRefeicao] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [dentroDieta, setDentroDieta] = useState(false);  

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  async function handleAddRefeicao(){
    try {
      const newId = await getNewIdRefeicao();
      // console.log('NovoID', newId);
      // const dados = {
      //     id: newId,
      //     hora, 
      //     refeicao, 
      //     descricao,
      //     dentroDieta,
      //     type: dentroDieta  ? "PRIMARY" : "SECONDARY"      
      // }

      const dados = {
            id: newId,
            name,
            description,
            date,
            hour,
            diet
        }      

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

      // if(btnSim === 'DEFAULT' && btnNao === 'DEFAULT'){
      //   Alert.alert('Nova Refeição', 'Está dentro da dieta precisa ser definido!');
      //   return; 
      // }

  
      await mealCreate({title: date, hour, id: newId, name, description, diet });

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
    // if(btnSim === "DEFAULT"){
    //   setBtnSim("PRIMARY");
    //   setBtnNao("DEFAULT");
    //   setDentroDieta(true);
    // }else{
    //   setBtnSim("DEFAULT")
    //   setDentroDieta(false);
    // }
  }

  function handleSetOutDiet(){
    setBtnYes('DEFAULT');
    setBtnNo('SECUNDARY');
    setDiet('N');    
    // if(btnNao === "DEFAULT"){
    //   setBtnNao("SECONDARY");
    //   setBtnSim("DEFAULT");
    //   setDentroDieta(false);
    // }else{
    //   setBtnNao("DEFAULT")
    //   setDentroDieta(false);
    // }
  }

  // const offSet = Platform.OS === 'ios' ? 60 : 5;
  // const behavior = Platform.OS === 'ios' ?  'position' : 'padding';
  // console.log(Platform.OS);

  return (
    <Container>
      <Context>
        {/* <CardHeaderNovaRefeicao label="Nova Refeição" type="GRAY" /> */}

        <HeaderMeat/>

        {/* <ScrollView> */}

        {/* <DivDados> */}

        <Form>
        {/* <KeyboardAvoidingView style={{flex: 1}} behavior={behavior} keyboardVerticalOffset={offSet}> */}
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

            {/* <Input style={{
              height: 120
            }} multiline={true} numberOfLines={4} value={description} onChangeText={setDescricao} /> */}

          </DivLinha>

          {/* <DivLinha2Colunas>
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
          </DivLinha2Colunas> */}

          {/* <DivLinha>
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
          </DivLinha> */}


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


        {/* </KeyboardAvoidingView> */}
        </Form>
        {/* </DivDados> */}

        {/* </ScrollView> */}


      </Context>
      <BtnAddRefeicao onPress={handleAddRefeicao}>
        <TextBtnRefeicao>Cadastrar refeição</TextBtnRefeicao>
      </BtnAddRefeicao>
    </Container>
  );  
}

// const styles = StyleSheet.create({
//   input:{
//     width: '100%',
//     height: 48,
//     borderRadius: 6,
//     fontSize: 18,
//     padding: 14,
//     borderWidth: 1,
//     marginTop: 20,

//   }
// })


const styles = StyleSheet.create({
  input: {
    height: 60,
    width:150,
    margin: 0,
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 16,
    fontSize: 18
  },
});