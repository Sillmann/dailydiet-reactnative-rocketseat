import { SafeAreaView } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Context = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`;

export const DivCabecalho = styled.View`
  flex: 1;
  width: 100%;
  /* border: solid 0.5px;
  border-radius: 36px; */
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};  
  height: 132px;
  margin-top: 0px;
  /* margin-left: 16px;
  margin-right: 16px; */
  flex-direction: row;
  /* align-items: center; */
  /* justify-content: space-around; */
`;

export const BtnBack = styled.TouchableOpacity`
  margin-left: 5%;
  margin-top: 24px; 
`;

export const ImgBack = styled.Image`
  width: 24px;
  height: 24px;
`;

export const LblBack = styled.Text`
  margin-left: 25%;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;
`;

export const Label = styled.Text`
  color: ${({ theme })=>theme.COLORS.GRAY_200};
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;  
`;

export const DivDados = styled.View`
  /* border: solid 0px; */
  border-radius: 25px;
  margin-top: -60px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700 };
`;

export const InputNome = styled.TextInput`
  /* flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme })=>theme.COLORS.GRAY_100}; */
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 100%; 
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;    
`;

export const InputDescricao = styled.TextInput`
  /* flex: 1;
  min-height: 56px;
  max-height: 56px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme })=>theme.COLORS.GRAY_100}; */
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 100%; 
  height: 120px;
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;  
`;

export const InputData = styled.TextInput`
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 150px; 
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;    
`;

export const InputHora = styled.TextInput`
  border-radius: 6px;
  padding: 16px;
  border: solid 0.5px;
  margin: 0px;
  width: 150px; 
  font-size: ${({ theme })=>theme.FONT_SIZE.LG}px;    
`;

export const DivLinha = styled.View`
  margin-top: 24px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const DivColuna = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 0px;
`;

export type btnDietaStyleProps = "PRIMARY" | "SECONDARY" | "DEFAULT";

type Props = {
  type: btnDietaStyleProps;
}

export const BtnDietaSim = styled.TouchableOpacity<Props>`
  width: 159px;
  height: 50px;
  /* background-color: ${({ theme }) => theme.COLORS.GRAY_600};   */
  
  background-color: ${({theme, type}) => 
    type === "PRIMARY" ? theme.COLORS.GRAY_600 : theme.COLORS.WHITE}; 

  top: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const BtnDietaNao = styled.TouchableOpacity<Props>`
  width: 159px;
  height: 50px;
  /* background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};   */

  background-color: ${({theme, type}) => 
    type === 'SECUNDARY' ? theme.COLORS.RED_LIGHT : theme.COLORS.WHITE}; 

  top: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.Image`
  width: 8px;
  height: 8px;
`;

export const DivCadastrar = styled.View`
  flex: 1;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
`;
