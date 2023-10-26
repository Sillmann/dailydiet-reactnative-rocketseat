import { useNavigation } from "@react-navigation/native";

import backPng from '@assets/back.png';

import { Container, 
         BtnBack, 
         ImgBack, 
         LblBack 
        } from "./styles";

type Props = {
  infoText: string;
}  
         
export function HeaderMeal({ infoText }: Props ){

  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }

  return(
    <Container>
          
      <BtnBack
        onPress={handleGoBack}  
      >
      
      <ImgBack source={backPng}/>
            
      </BtnBack>

      <LblBack>{ infoText }</LblBack>
        
    </Container>
  );
}
