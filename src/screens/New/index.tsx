import { StyleSheet, ScrollView, Alert } from 'react-native';

import { Container, Context, DivCabecalho, BtnBack, ImgBack, LblBack, Label, InputNome, InputDescricao, InputData, InputHora, DivLinha, DivColuna, BtnDietaSim, BtnDietaNao, Status, DivCadastrar, DivDados } from './styles';

// import { CardHeaderNovaRefeicao } from '@components/CardHeaderNovaRefeicao';
import { Button } from '@components/Button';

import simPng from '@assets/statussim.png';
import naoPng from '@assets/statusnao.png';
import backPng from '@assets/back.png';
// import { Input } from '@components/Input';

// https://github.com/bhrott/react-native-masked-text
// npm install react-native-masked-text --save
import { TextInputMask } from 'react-native-masked-text'

import { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import {refeicaoCreate} from '@storage/refeicoes/refeicaoCreate';

import { getNewIdRefeicao } from "@storage/refeicoes/getNewIdRefeicao";

export function New() {

  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [dieta, setDieta] = useState('');
  const [btnSim, setBtnSim] = useState("DEFAULT");
  const [btnNao, setBtnNao] = useState("DEFAULT");

  const navigation = useNavigation();

  function handleGoBack(){
    // Alert.alert('teste');
    navigation.goBack();
  }

  async function handleAddRefeicao(){
    // console.log(nome)
    // console.log(descricao)
    // console.log(data)
    // console.log(hora)
    // console.log(dieta)
    // console.log(btnSim);
    // console.log(btnNao);

    // const dados = {
    //   id: 1,
    //   nome, 
    //   descricao,
    //   data, 
    //   hora, 
    //   dieta,
    // }
    const newId = await getNewIdRefeicao();    

    await refeicaoCreate({title: data, id: newId, nome, descricao, data, hora, dieta});

    if (dieta==='S'){
      navigation.navigate('verygood');
    } else {
      navigation.navigate('sobad');
    }
  }

  function handleSetDentroDieta(){
    setBtnSim("PRIMARY");
    setBtnNao("DEFAULT");
    setDieta('S');
  }

  function handleSetForaDieta(){
    setBtnSim("DEFAULT");
    setBtnNao("SECUNDARY");
    setDieta('N');
  }

  return (
    <Container>

      <Context>

      <ScrollView>

        {/* <CardHeaderNovaRefeicao label="Nova Refeição"/> */}

        <DivCabecalho>
          
          <BtnBack
            onPress={handleGoBack}  
          >
          
          <ImgBack source={backPng}/>
                
          </BtnBack>

          <LblBack>Nova Refeicao</LblBack>
        </DivCabecalho>

        <DivDados>



        <DivLinha>
          <Label>Nome</Label>
          <InputNome
            value={nome}
            onChangeText={setNome} 
          />
        </DivLinha>

        <DivLinha>
          <Label>Descrição</Label>
          <InputDescricao 
            value={descricao}
            onChangeText={setDescricao} 
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
              value={data}
              onChangeText={setData}
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
              value={hora}
              onChangeText={setHora}
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
              type={btnSim}
              onPress={handleSetDentroDieta}
            >
            
              <Status source={simPng} />
              <Label>  Sim  </Label>

            </BtnDietaSim>

            <BtnDietaNao
              type={btnNao}
              onPress={handleSetForaDieta}
            >
            
              <Status source={naoPng} />
              <Label>  Não  </Label>
            </BtnDietaNao>

            
          </DivColuna>

        </DivLinha>

        </DivDados>



        <DivCadastrar>
        <Button
          oTexto="Cadastrar Refeição"
          onPress={handleAddRefeicao}
        />
        </DivCadastrar>      
        

</ScrollView>
      </Context>


    </Container>
  )
}  

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


 