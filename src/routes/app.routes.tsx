import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { DetalhesRefeicao } from '@screens/DetalhesRefeicao';
import { EditarRefeicao } from '@screens/EditarRefeicao';
import { Estatisticas } from '@screens/Estatisticas';
import { Home } from '@screens/Home';
import { New } from '@screens/New';
import { RefeicaoSalvo } from '@screens/RefeicaoSalvo';


const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="estatisticas" component={Estatisticas} />
      <Screen name="new" component={New} />
      <Screen name="salvo" component={RefeicaoSalvo} />
      <Screen name="descricao" component={DetalhesRefeicao} />
      <Screen name="editar" component={EditarRefeicao} />
    </Navigator>
  );
}



