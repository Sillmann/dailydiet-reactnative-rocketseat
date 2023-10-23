import {View} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useTheme } from 'styled-components';

export function Routes(){
  const { COLORS } = useTheme();
  return(
    <View style={{flex: 1, backgroundColor: COLORS.BASE.GRAY[700] }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  );
}