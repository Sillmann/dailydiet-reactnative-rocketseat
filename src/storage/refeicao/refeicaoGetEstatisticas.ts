import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICOES_COLLECTION } from "@storage/storageConfig";
import { refeicoesGetAll } from "./refeicaoGetAll";



export async function refeicaoGetEstatisticas(){
  const refeicoes = await refeicoesGetAll();
  let qtdRefeicoes = 0;
  let qtdRefeicoesDentro = 0;
  let qtdRefeicoesFora = 0;
  let percentagemDentroDieta = 0;
  let melhorSequencia = 0;
  let sequenciaAtual = 0;

  refeicoes.map(refeicao => qtdRefeicoes += refeicao.data.length );
  refeicoes.map(refeicao => qtdRefeicoesDentro += refeicao.data.filter(alimentacao => alimentacao.dentroDieta === true).length)

  refeicoes.forEach(refeicao => 
    refeicao.data.forEach(alimentacao => {
      // console.log('DentroDieta: ',alimentacao.dentroDieta);
      if(alimentacao.dentroDieta){
        sequenciaAtual += 1;        
        if(sequenciaAtual > melhorSequencia){
          melhorSequencia = sequenciaAtual;
        }
      }else{
        sequenciaAtual = 0;
      } 
  })
  )
  // console.log(melhorSequencia);
  qtdRefeicoesFora = qtdRefeicoes - qtdRefeicoesDentro;
  percentagemDentroDieta = (qtdRefeicoesDentro * 100 / qtdRefeicoes );
  // console.log(percentagemDentroDieta);

  return {qtdRefeicoes, qtdRefeicoesDentro, qtdRefeicoesFora, percentagemDentroDieta, melhorSequencia};

}