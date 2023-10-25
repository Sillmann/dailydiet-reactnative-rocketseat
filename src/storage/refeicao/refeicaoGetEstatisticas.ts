import { mealGetAll } from "./mealGetAll";

export async function refeicaoGetEstatisticas(){
  const fileData = await mealGetAll();
  let qtdRefeicoes = 0;
  let qtdRefeicoesDentro = 0;
  let qtdRefeicoesFora = 0;
  let percentagemDentroDieta = 0;
  let melhorSequencia = 0;
  let sequenciaAtual = 0;

  fileData.map(i => qtdRefeicoes += i.data.length );
  fileData.map(i => qtdRefeicoesDentro += i.data.filter(i => i.diet === 'S').length)

  fileData.forEach(i => 
    i.data.forEach(j => {
      // console.log('DentroDieta: ',alimentacao.dentroDieta);
      if(j.diet === 'S'){
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