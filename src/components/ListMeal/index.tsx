import { TouchableOpacityProps } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { mealGetAll } from "@storage/refeicao/mealGetAll";
import { getMeal } from "@storage/refeicao/getMeal";

import { Container, 
         LineVertical, 
         StatusRefeicao, 
         statusRefeicaoStyleProps, 
         TextHora, 
         TextNomeRefeicao } from "./style";

type Props = TouchableOpacityProps & {
  id: number;
  name: string;
  description: string;
  date: string;
  hour: string;
  type?: statusRefeicaoStyleProps;  
}

export function ListMeal({id, name, description, date, hour, type, ...rest} : Props){

  const navigation = useNavigation();

  async function handleEditarRefeicao(dateTime: string){
    
    let dataRefeicao: string = "";
    // let refeicaoSelecionada = {};
    // const refeicoes = await mealGetAll();
    const refeicoes = await getMeal(dateTime);
    const newRefeicoes = JSON.stringify(refeicoes);

    console.log('newRefeicoes');
    console.log(newRefeicoes);
    
    const refeicaoSelecionada = newRefeicoes;

    // const mealFreeze = Object.freeze(newRefeicoes);
    // console.log(mealFreeze.description);

    // const refeicoesFiltradas = refeicoes.map(refeicao => {
    //   return refeicao.data.filter(refeicaoData => refeicaoData.id !== id);
    // });
    
    // refeicoes.forEach(refeicao => {
    //   refeicao.data.forEach(refeicaoData => {
    //     if(refeicaoData.id === id){
    //       dataRefeicao = refeicao.title; 
    //       refeicaoSelecionada = refeicaoData;
    //       return;
    //     }
    //   })
    // });    
    
    //console.log('refeicoesFiltradas', refeicoesFiltradas);
    // console.log('dataRefeicao', dataRefeicao);
    //console.log('refeicaoSelecionada', JSON.parse(refeicaoSelecionada).name);
    //console.log('refeicaoSelecionadaDescricao', refeicaoSelecionada?.description);

    navigation.navigate('detmeal', {
      pId: JSON.parse(refeicaoSelecionada).id,
      pName: JSON.parse(refeicaoSelecionada).name,
      pDescription: JSON.parse(refeicaoSelecionada).description,
      pDate: JSON.parse(refeicaoSelecionada).date,
      pHour: JSON.parse(refeicaoSelecionada).hour,
      pDiet: JSON.parse(refeicaoSelecionada).diet
    });
    
  }

  return (
    <Container onPress={() => handleEditarRefeicao(`${ date }-${ hour }`)}>
      <TextHora>{hour}</TextHora>
      <LineVertical />
      <TextNomeRefeicao>{name}</TextNomeRefeicao>
      <StatusRefeicao type={type} />
    </Container>
  );
}