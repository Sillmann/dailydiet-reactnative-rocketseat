import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDENTIFICADOR_COLLECTION, REFEICOES_COLLECTION } from "@storage/storageConfig";
import { useState } from "react";
import { refeicoesGetAll } from "./refeicaoGetAll";

type refeicaoProps = {
  title: string;
  hora: string, 
  id: number,
  refeicao: string, 
  descricao: string;          
  dentroDieta: boolean,
  type: "PRIMARY" | "SECONDARY"
}

export async function  refeicaoCreate({title, hora, id, refeicao, descricao, dentroDieta, type }: refeicaoProps){
  try {
    
    const alimentacoes = await refeicoesGetAll();   
    if(alimentacoes.length === 0){

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
      const storage = JSON.stringify([newRefeicao]);
      await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
    }else{
      const existeData = alimentacoes.filter(alimentacao => alimentacao.title === title);
      if(existeData.length > 0){
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
        // console.log('dataFiltrada: ', dataFiltrada[0]);
        
        const novasRefeicoes = [...dados, dataFiltrada];
        // console.log(novasRefeicoes);
        const storage = JSON.stringify(novasRefeicoes);
        await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);    
        
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
        
        const newDados = [...alimentacoes, newRefeicao];
        const storage = JSON.stringify(newDados);
        await AsyncStorage.setItem(REFEICOES_COLLECTION, storage);           
        
        //.sort((a, b) => a.idx - b.idx)
        
      }

    }
    const newId = {id: id};
    const idStorage = JSON.stringify(newId);
    await AsyncStorage.setItem(IDENTIFICADOR_COLLECTION, idStorage);
  } catch (error) {
    throw error;
  }

  

}