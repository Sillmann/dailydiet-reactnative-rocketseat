import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '@screens/Home';
import { New } from '@screens/New';
import { Verygood } from '@screens/Verygood';
import { Sobad } from '@screens/Sobad';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes(){
  return(
    <Navigator screenOptions={{ headerShown: false }}>
	  
		<Screen
	    name="home"
		  component={Home}
	  />

	  <Screen
	    name="new"
		  component={New}
	  />

	  <Screen
	    name="verygood"
		  component={Verygood}
	  />

	  <Screen
	    name="sobad"
		  component={Sobad}
	  />

	</Navigator>
  );
}
