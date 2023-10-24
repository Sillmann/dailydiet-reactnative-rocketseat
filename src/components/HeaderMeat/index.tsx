import { useNavigation } from "@react-navigation/native";

import backPng from '@assets/back.png';

import { DivCabecalho, 
         BtnBack, 
         ImgBack, 
         LblBack } from "./styles";

export function HeaderMeat(){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <DivCabecalho>
          
      <BtnBack
        onPress={handleGoBack}  
      >
      
      <ImgBack source={backPng}/>
            
      </BtnBack>

      <LblBack>Nova Refeição</LblBack>
        
    </DivCabecalho>
  );
}
