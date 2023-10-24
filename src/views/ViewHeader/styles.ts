import styled from "styled-components/native";
import { SafeAreaView } from 'react-native-safe-area-context';


export const Container = styled.View`
  width: 100%;
  height: 100px;
  flex-direction: row;
  //background-color: ${({theme}) => theme.COLORS.BRAND.RED.DARK};
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image`
  width : 82px;
  height: 37px;  
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;