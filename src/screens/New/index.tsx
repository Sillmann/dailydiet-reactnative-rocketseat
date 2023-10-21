import { StyleSheet, ScrollView } from 'react-native';

import { Container, Context, Label, InputNome, InputDescricao, InputData, InputHora, DivLinha, DivColuna, BtnDietaSim, BtnDietaNao, Status, DivCadastrar } from './styles';

import { CardHeaderNovaRefeicao } from '@components/CardHeaderNovaRefeicao';
import { Button } from '@components/Button';

import simPng from '@assets/statussim.png';
import naoPng from '@assets/statusnao.png';
// import { Input } from '@components/Input';

// https://github.com/bhrott/react-native-masked-text
// npm install react-native-masked-text --save
import { TextInputMask } from 'react-native-masked-text'

import { useState } from 'react';

export function New() {

  const [minhaData, setMinhaData] = useState('');
  const [minhaHora, setMinhaHora] = useState('');

  return (
    <Container>



      <Context>

      <ScrollView>

        <CardHeaderNovaRefeicao label="Nova Refeição"/>
        <DivLinha>
          <Label>Nome</Label>
          <InputNome/>
        </DivLinha>

        <DivLinha>
          <Label>Descrição</Label>
          <InputDescricao 
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
              value={minhaData}
                onChangeText={setMinhaData}
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
              value={minhaHora}
                onChangeText={setMinhaHora}
                style={styles.input}
            />
          </DivLinha> 

        </DivColuna> 

        
        
          <DivLinha>
            <Label>Está dentro da dieta?</Label>
          </DivLinha>

          <DivLinha>

          <DivColuna>
            

            <BtnDietaSim>
            
              <Status source={simPng} />
              <Label>  Sim  </Label>
            </BtnDietaSim>

            <BtnDietaNao>
            
              <Status source={naoPng} />
              <Label>  Não  </Label>
            </BtnDietaNao>

            
        </DivColuna>

        </DivLinha>

        <DivCadastrar>
        <Button
        oTexto="Cadastrar Refeição"
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


 