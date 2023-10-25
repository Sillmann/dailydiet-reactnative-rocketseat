import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { DetMeal } from '@screens/DetMeal';
import { EditMeal } from '@screens/EditMeal';
import { Statistics } from '@screens/Statistics';
import { Home } from '@screens/Home';
import { New } from '@screens/New';
import { Good } from '@screens/Good';
import { Bad } from '@screens/Bad';

const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="new" component={New} />
      <Screen name="good" component={Good} />
      <Screen name="bad" component={Bad} />
      <Screen name="detmeal" component={DetMeal} />
      <Screen name="editmeal" component={EditMeal} />
    </Navigator>
  );
}



