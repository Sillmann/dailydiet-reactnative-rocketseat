import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { useState } from "react";
import { refeicoesGetAll } from "./refeicaoGetAll";

type refeicaoProps = {
  title: string;
  titleAntiga: string;
  hora: string, 
  id: number,
  refeicao: string, 
  descricao: string;          
  dentroDieta: boolean,
  type: "PRIMARY" | "SECONDARY"
}

export async function  refeicaoUpdate({title, titleAntiga, hora, id, refeicao, descricao, dentroDieta, type }: refeicaoProps){
  try {
    
    const alimentacoes = await refeicoesGetAll();     
     if(title === titleAntiga){
      alimentacoes.map(alimento => {
        alimento.data.map(food => {
         if(food.id === id){
          food.dentroDieta = dentroDieta,
          food.refeicao = refeicao,
          food.descricao = descricao,
          food.hora = hora,
          food.type= dentroDieta ? 'PRIMARY' : 'SECONDARY'
         }
        })
      })
      const storage = JSON.stringify(alimentacoes);
      await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);  
    }else{
      const alimentacoes = await refeicoesGetAll(); 
        //vamos verificar se a data ja existe
        const jaExiste = alimentacoes.filter(alimentos => alimentos.title === title);
        if(jaExiste.length > 0){
          const dados = alimentacoes.filter(alimento => alimento.title !== title);
          let dataFiltrada = alimentacoes.find(alimento => alimento.title === title);
          dataFiltrada?.data.push({
            hora,
            id,
            refeicao,
            descricao,
            dentroDieta,
            type,
          }) 
          
          const refeicoes = [...dados, dataFiltrada];

          const outrosDados = refeicoes.filter(alimentos => alimentos?.title !== titleAntiga);
          const dadosFiltrado = refeicoes.find(alimentos => alimentos?.title === titleAntiga);
          const dadosCorretos = dadosFiltrado?.data.filter(newRefeicao => newRefeicao?.id !== id );
          
          
          if(dadosCorretos?.length > 0){
            // console.log('dadosCorretos', dadosCorretos);
            // console.log('dadosFiltrado?.title', dadosFiltrado?.title);
            // console.log('maior que zero');
            
            // return;  
            const dadosDataCorreta = {
              title: dadosFiltrado?.title,
              data : dadosCorretos
            }
            const novaRefeicao = [...outrosDados, dadosDataCorreta ]
            const storage = JSON.stringify(novaRefeicao);
            await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);
          }else{
            // console.log('outrosDados', outrosDados);
            // return;
            const novaRefeicao = outrosDados;
            // console.log('novaRefeicao', novaRefeicao);
            const storage = JSON.stringify(novaRefeicao);
            await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);
          }
          
                    

        }else{

          const newRefeicao = {
            title,
            data: [{
              hora,
            id,
            refeicao,
            descricao,
            dentroDieta,
            type,
            }]
          }         
          
          const refeicoes = [...alimentacoes, newRefeicao];
          const outrosDados = refeicoes.filter(alimentos => alimentos?.title !== titleAntiga);
          const dadosFiltrado = refeicoes.find(alimentos => alimentos?.title === titleAntiga);
          const dadosCorretos = dadosFiltrado?.data.filter(newRefeicao => newRefeicao?.id !== id );

          if(dadosCorretos?.length > 0){
            const dadosDataCorreta = {
              title: dadosFiltrado?.title,
              data : dadosCorretos
            }
  
            
            const novaRefeicao = [...outrosDados, dadosDataCorreta ]
            const storage = JSON.stringify(novaRefeicao);
            await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);     
          }else{
            const novaRefeicao = outrosDados;
            const storage = JSON.stringify(novaRefeicao);
            await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);     
          }         
          

        }
      

     }
    
  } catch (error) {
    throw error;
  }

}