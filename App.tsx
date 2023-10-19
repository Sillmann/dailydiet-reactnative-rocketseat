import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold} from '@expo-google-fonts/nunito';
import theme from './src/theme/';
import { StatusBar } from "react-native";

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';


export default function App() {

  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
     <StatusBar 
        barStyle="dark-content" 
        backgroundColor="transparent" 
        translucent
     /> 
     { fontsLoaded ? <Home /> : <Loading/> }
    </ThemeProvider>
  )
}